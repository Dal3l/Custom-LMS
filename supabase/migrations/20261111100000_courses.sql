-- Stage 1.1: courses → modules → lessons.
-- Sections and exercises come in step 1.2.

-- ---------------------------------------------------------------------------
-- Helpers (security definer so policies can call them without RLS recursion)
-- ---------------------------------------------------------------------------
create function public.is_teacher()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and role = 'teacher'
  );
$$;

create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and is_admin
  );
$$;

-- Shared "updated_at" trigger.
create function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------
create table public.courses (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 200),
  -- taught language, ISO 639 code: 'en', 'de', 'kk', …
  language text not null check (language ~ '^[a-z]{2,3}$'),
  -- 'A1'…'C2' or any short label; '' = no level
  level text not null default '' check (char_length(level) <= 20),
  description text not null default '' check (char_length(description) <= 2000),
  -- path inside the public "course-covers" storage bucket
  cover_path text check (char_length(cover_path) <= 300),
  -- platform library course (created by an admin); teachers can view and copy it
  is_library boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index courses_owner_idx on public.courses (owner_id);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 200),
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index modules_course_idx on public.modules (course_id, position);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules (id) on delete cascade,
  -- copied from the module by a trigger; makes access checks simple and fast
  course_id uuid not null references public.courses (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 200),
  position integer not null,
  -- module test: the student sees a score in percent
  is_test boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index lessons_module_idx on public.lessons (module_id, position);
create index lessons_course_idx on public.lessons (course_id);

create trigger courses_touch before update on public.courses
  for each row execute function public.touch_updated_at();
create trigger modules_touch before update on public.modules
  for each row execute function public.touch_updated_at();
create trigger lessons_touch before update on public.lessons
  for each row execute function public.touch_updated_at();

-- New modules/lessons go to the end unless a position is given.
create function public.modules_before_insert()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.position is null then
    select coalesce(max(position) + 1, 0) into new.position
    from public.modules where course_id = new.course_id;
  end if;
  return new;
end;
$$;
create trigger modules_before_insert before insert on public.modules
  for each row execute function public.modules_before_insert();

create function public.lessons_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' or new.module_id is distinct from old.module_id then
    select course_id into new.course_id from public.modules where id = new.module_id;
  end if;
  if tg_op = 'INSERT' and new.position is null then
    select coalesce(max(position) + 1, 0) into new.position
    from public.lessons where module_id = new.module_id;
  end if;
  return new;
end;
$$;
create trigger lessons_before_write before insert or update on public.lessons
  for each row execute function public.lessons_before_write();

-- ---------------------------------------------------------------------------
-- Access helpers that depend on the tables
-- ---------------------------------------------------------------------------
create function public.owns_course(p_course uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.courses
    where id = p_course and owner_id = (select auth.uid())
  );
$$;

-- Stage 2 extends this with "the course is assigned to the student's class".
create function public.can_view_course(p_course uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.courses c
    where c.id = p_course
      and (
        c.owner_id = (select auth.uid())
        or (c.is_library and c.is_published and public.is_teacher())
      )
  );
$$;

revoke execute on function public.is_teacher(), public.is_admin(),
  public.owns_course(uuid), public.can_view_course(uuid) from public, anon;
grant execute on function public.is_teacher(), public.is_admin(),
  public.owns_course(uuid), public.can_view_course(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.courses enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;

-- Courses: teachers manage their own; published library courses are visible to all teachers.
-- Written inline (not via can_view_course) so a just-inserted row is visible
-- to "insert … returning".
create policy "courses: owner or library can read" on public.courses
  for select to authenticated
  using (
    owner_id = (select auth.uid())
    or (is_library and is_published and (select public.is_teacher()))
  );
create policy "courses: teachers create their own" on public.courses
  for insert to authenticated
  with check (owner_id = (select auth.uid()) and public.is_teacher());
create policy "courses: owner can update" on public.courses
  for update to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));
create policy "courses: owner can delete" on public.courses
  for delete to authenticated
  using (owner_id = (select auth.uid()));

-- Modules and lessons follow their course.
create policy "modules: read with course" on public.modules
  for select to authenticated using (public.can_view_course(course_id));
create policy "modules: owner can insert" on public.modules
  for insert to authenticated with check (public.owns_course(course_id));
create policy "modules: owner can update" on public.modules
  for update to authenticated
  using (public.owns_course(course_id)) with check (public.owns_course(course_id));
create policy "modules: owner can delete" on public.modules
  for delete to authenticated using (public.owns_course(course_id));

create policy "lessons: read with course" on public.lessons
  for select to authenticated using (public.can_view_course(course_id));
create policy "lessons: owner can insert" on public.lessons
  for insert to authenticated with check (public.owns_course(course_id));
create policy "lessons: owner can update" on public.lessons
  for update to authenticated
  using (public.owns_course(course_id)) with check (public.owns_course(course_id));
create policy "lessons: owner can delete" on public.lessons
  for delete to authenticated using (public.owns_course(course_id));

-- Column privileges: owner_id, is_library, is_published and timestamps are not
-- writable from the app (library publishing is an admin task for later).
revoke all on public.courses, public.modules, public.lessons from anon, authenticated;
grant select, delete on public.courses, public.modules, public.lessons to authenticated;
grant insert (title, language, level, description, cover_path) on public.courses to authenticated;
grant update (title, language, level, description, cover_path) on public.courses to authenticated;
grant insert (course_id, title, position) on public.modules to authenticated;
grant update (title, position) on public.modules to authenticated;
grant insert (module_id, title, position, is_test) on public.lessons to authenticated;
grant update (module_id, title, position, is_test) on public.lessons to authenticated;

-- ---------------------------------------------------------------------------
-- Ordering and duplication (run with the caller's rights, so RLS applies)
-- ---------------------------------------------------------------------------
-- Sets module order to the order of p_ids.
create function public.reorder_modules(p_course uuid, p_ids uuid[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.modules m
  set position = t.ord - 1
  from unnest(p_ids) with ordinality as t(id, ord)
  where m.id = t.id and m.course_id = p_course;
$$;

-- Puts the given lessons into p_module in this order (also moves lessons
-- dragged in from another module of the same course).
create function public.reorder_lessons(p_module uuid, p_ids uuid[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.lessons l
  set module_id = p_module, position = t.ord - 1
  from unnest(p_ids) with ordinality as t(id, ord)
  where l.id = t.id
    and l.course_id = (select course_id from public.modules where id = p_module);
$$;

-- Copies a lesson right after the original. p_suffix is the translated " (copy)".
create function public.duplicate_lesson(p_id uuid, p_suffix text)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  src public.lessons;
  new_id uuid;
begin
  select * into src from public.lessons where id = p_id;
  if not found then raise exception 'lesson not found' using errcode = 'P0002'; end if;

  update public.lessons set position = position + 1
  where module_id = src.module_id and position > src.position;

  insert into public.lessons (module_id, title, position, is_test)
  values (src.module_id, left(src.title || p_suffix, 200), src.position + 1, src.is_test)
  returning id into new_id;
  -- step 1.2: copy sections and exercises here
  return new_id;
end;
$$;

-- Copies all lessons of one module into another (same or different course).
create function public.copy_module_lessons(p_from uuid, p_to uuid)
returns void
language plpgsql
security invoker
set search_path = ''
as $$
declare
  l public.lessons;
begin
  for l in select * from public.lessons where module_id = p_from order by position loop
    insert into public.lessons (module_id, title, position, is_test)
    values (p_to, l.title, l.position, l.is_test);
    -- step 1.2: copy sections and exercises here
  end loop;
end;
$$;

create function public.duplicate_module(p_id uuid, p_suffix text)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  src public.modules;
  new_id uuid;
begin
  select * into src from public.modules where id = p_id;
  if not found then raise exception 'module not found' using errcode = 'P0002'; end if;

  update public.modules set position = position + 1
  where course_id = src.course_id and position > src.position;

  insert into public.modules (course_id, title, position)
  values (src.course_id, left(src.title || p_suffix, 200), src.position + 1)
  returning id into new_id;

  perform public.copy_module_lessons(src.id, new_id);
  return new_id;
end;
$$;

-- Copies a whole course into the caller's own courses. Works for the caller's
-- courses and for library courses ("copy to my courses").
create function public.duplicate_course(p_id uuid, p_suffix text)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  src public.courses;
  m public.modules;
  new_course uuid;
  new_module uuid;
begin
  select * into src from public.courses where id = p_id;
  if not found then raise exception 'course not found' using errcode = 'P0002'; end if;

  insert into public.courses (title, language, level, description, cover_path)
  values (left(src.title || p_suffix, 200), src.language, src.level, src.description, src.cover_path)
  returning id into new_course;

  for m in select * from public.modules where course_id = src.id order by position loop
    insert into public.modules (course_id, title, position)
    values (new_course, m.title, m.position)
    returning id into new_module;
    perform public.copy_module_lessons(m.id, new_module);
  end loop;

  return new_course;
end;
$$;

revoke execute on function public.reorder_modules(uuid, uuid[]), public.reorder_lessons(uuid, uuid[]),
  public.duplicate_lesson(uuid, text), public.copy_module_lessons(uuid, uuid),
  public.duplicate_module(uuid, text), public.duplicate_course(uuid, text)
  from public, anon;
grant execute on function public.reorder_modules(uuid, uuid[]), public.reorder_lessons(uuid, uuid[]),
  public.duplicate_lesson(uuid, text), public.copy_module_lessons(uuid, uuid),
  public.duplicate_module(uuid, text), public.duplicate_course(uuid, text)
  to authenticated;

-- ---------------------------------------------------------------------------
-- Storage: course covers (public images; each teacher writes only to their folder)
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('course-covers', 'course-covers', true, 5242880,
        array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

create policy "course-covers: teachers upload to own folder" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'course-covers'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and public.is_teacher()
  );
create policy "course-covers: owner can read own folder" on storage.objects
  for select to authenticated
  using (bucket_id = 'course-covers' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "course-covers: owner can delete own files" on storage.objects
  for delete to authenticated
  using (bucket_id = 'course-covers' and (storage.foldername(name))[1] = (select auth.uid())::text);
