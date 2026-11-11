-- Stage 1.2: lesson content — sections → exercises (+ answer keys).
--
-- Correct answers live in a separate table, exercise_keys, readable only by the
-- course owner. Students will never be able to select it; answer checking
-- (step 1.4) runs on the server.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------
create table public.sections (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  -- copied from the lesson by a trigger (fast access checks)
  course_id uuid not null references public.courses (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 100),
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index sections_lesson_idx on public.sections (lesson_id, position);
create index sections_course_idx on public.sections (course_id);

create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  section_id uuid not null references public.sections (id) on delete cascade,
  -- both copied from the section by a trigger
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  -- exercise type id from src/features/exercises (e.g. 'text', 'gap_fill')
  type text not null check (type ~ '^[a-z][a-z_]{1,39}$'),
  -- instruction shown above the exercise ("Fill in the gaps")
  title text not null default '' check (char_length(title) <= 500),
  -- what the student sees; never contains correct answers
  content jsonb not null default '{}'::jsonb
    check (jsonb_typeof(content) = 'object' and pg_column_size(content) <= 262144),
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index exercises_section_idx on public.exercises (section_id, position);
create index exercises_lesson_idx on public.exercises (lesson_id);
create index exercises_course_idx on public.exercises (course_id);

create table public.exercise_keys (
  exercise_id uuid primary key references public.exercises (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  answer_key jsonb not null default '{}'::jsonb
    check (jsonb_typeof(answer_key) = 'object' and pg_column_size(answer_key) <= 65536),
  updated_at timestamptz not null default now()
);
create index exercise_keys_course_idx on public.exercise_keys (course_id);

create trigger sections_touch before update on public.sections
  for each row execute function public.touch_updated_at();
create trigger exercises_touch before update on public.exercises
  for each row execute function public.touch_updated_at();
create trigger exercise_keys_touch before update on public.exercise_keys
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Triggers: denormalised ids and "append to the end" positions
-- ---------------------------------------------------------------------------
create function public.sections_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' or new.lesson_id is distinct from old.lesson_id then
    select course_id into new.course_id from public.lessons where id = new.lesson_id;
  end if;
  if tg_op = 'INSERT' and new.position is null then
    select coalesce(max(position) + 1, 0) into new.position
    from public.sections where lesson_id = new.lesson_id;
  end if;
  return new;
end;
$$;
create trigger sections_before_write before insert or update on public.sections
  for each row execute function public.sections_before_write();

create function public.exercises_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' or new.section_id is distinct from old.section_id then
    select lesson_id, course_id into new.lesson_id, new.course_id
    from public.sections where id = new.section_id;
  end if;
  if tg_op = 'INSERT' and new.position is null then
    select coalesce(max(position) + 1, 0) into new.position
    from public.exercises where section_id = new.section_id;
  end if;
  return new;
end;
$$;
create trigger exercises_before_write before insert or update on public.exercises
  for each row execute function public.exercises_before_write();

create function public.exercise_keys_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  select course_id into new.course_id from public.exercises where id = new.exercise_id;
  return new;
end;
$$;
create trigger exercise_keys_before_write before insert or update on public.exercise_keys
  for each row execute function public.exercise_keys_before_write();

-- A lesson moved to another course would leave its content behind; keep course_id in sync.
create function public.lessons_after_course_change()
returns trigger
language plpgsql
security definer -- writes course_id, which users may not set directly
set search_path = ''
as $$
begin
  if new.course_id is distinct from old.course_id then
    update public.sections set course_id = new.course_id where lesson_id = new.id;
    update public.exercises set course_id = new.course_id where lesson_id = new.id;
    update public.exercise_keys k set course_id = new.course_id
      from public.exercises e where e.id = k.exercise_id and e.lesson_id = new.id;
  end if;
  return null;
end;
$$;
create trigger lessons_after_course_change after update of course_id on public.lessons
  for each row execute function public.lessons_after_course_change();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.sections enable row level security;
alter table public.exercises enable row level security;
alter table public.exercise_keys enable row level security;

create policy "sections: read with course" on public.sections
  for select to authenticated using (private.can_view_course(course_id));
create policy "sections: owner can insert" on public.sections
  for insert to authenticated with check (private.owns_course(course_id));
create policy "sections: owner can update" on public.sections
  for update to authenticated
  using (private.owns_course(course_id)) with check (private.owns_course(course_id));
create policy "sections: owner can delete" on public.sections
  for delete to authenticated using (private.owns_course(course_id));

create policy "exercises: read with course" on public.exercises
  for select to authenticated using (private.can_view_course(course_id));
create policy "exercises: owner can insert" on public.exercises
  for insert to authenticated with check (private.owns_course(course_id));
create policy "exercises: owner can update" on public.exercises
  for update to authenticated
  using (private.owns_course(course_id)) with check (private.owns_course(course_id));
create policy "exercises: owner can delete" on public.exercises
  for delete to authenticated using (private.owns_course(course_id));

-- Answer keys: the course owner only. Not even other teachers viewing a
-- library course can read them (copying a course copies them server-side).
create policy "exercise_keys: owner only" on public.exercise_keys
  for all to authenticated
  using (private.owns_course(course_id)) with check (private.owns_course(course_id));

revoke all on public.sections, public.exercises, public.exercise_keys from anon, authenticated;
grant select, delete on public.sections, public.exercises, public.exercise_keys to authenticated;
grant insert (lesson_id, title, position) on public.sections to authenticated;
grant update (title, position) on public.sections to authenticated;
grant insert (section_id, type, title, content, position) on public.exercises to authenticated;
grant update (section_id, title, content, position) on public.exercises to authenticated;
grant insert (exercise_id, answer_key) on public.exercise_keys to authenticated;
grant update (answer_key) on public.exercise_keys to authenticated;

-- ---------------------------------------------------------------------------
-- Ordering
-- ---------------------------------------------------------------------------
create function public.reorder_sections(p_lesson uuid, p_ids uuid[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.sections s
  set position = t.ord - 1
  from unnest(p_ids) with ordinality as t(id, ord)
  where s.id = t.id and s.lesson_id = p_lesson;
$$;

-- Puts the given exercises into p_section in this order (also moves exercises
-- from another section of the same lesson).
create function public.reorder_exercises(p_section uuid, p_ids uuid[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.exercises e
  set section_id = p_section, position = t.ord - 1
  from unnest(p_ids) with ordinality as t(id, ord)
  where e.id = t.id
    and e.lesson_id = (select lesson_id from public.sections where id = p_section);
$$;

-- Moves one exercise to the end of another section of the same lesson.
create function public.move_exercise(p_id uuid, p_section uuid)
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.exercises e
  set section_id = p_section,
      position = (select coalesce(max(position) + 1, 0) from public.exercises where section_id = p_section)
  where e.id = p_id
    and e.lesson_id = (select lesson_id from public.sections where id = p_section);
$$;

-- ---------------------------------------------------------------------------
-- Copying
-- ---------------------------------------------------------------------------
-- Copies sections, exercises and answer keys of one lesson into another.
-- Runs with owner rights so a teacher copying a *library* course also gets its
-- answer keys (which they cannot read directly); guarded by explicit checks.
create function private.copy_lesson_content(p_from uuid, p_to uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  src_course uuid;
  dst_course uuid;
  s public.sections;
  e public.exercises;
  new_section uuid;
  new_exercise uuid;
begin
  select course_id into src_course from public.lessons where id = p_from;
  select course_id into dst_course from public.lessons where id = p_to;
  if src_course is null or dst_course is null
     or not private.can_view_course(src_course)
     or not private.owns_course(dst_course) then
    raise exception 'not allowed' using errcode = '42501';
  end if;

  for s in select * from public.sections where lesson_id = p_from order by position loop
    insert into public.sections (lesson_id, title, position)
    values (p_to, s.title, s.position)
    returning id into new_section;

    for e in select * from public.exercises where section_id = s.id order by position loop
      insert into public.exercises (section_id, type, title, content, position)
      values (new_section, e.type, e.title, e.content, e.position)
      returning id into new_exercise;

      insert into public.exercise_keys (exercise_id, answer_key)
      select new_exercise, k.answer_key from public.exercise_keys k where k.exercise_id = e.id;
    end loop;
  end loop;
end;
$$;
revoke execute on function private.copy_lesson_content(uuid, uuid) from public, anon;
grant execute on function private.copy_lesson_content(uuid, uuid) to authenticated;

create or replace function public.duplicate_lesson(p_id uuid, p_suffix text)
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

  perform private.copy_lesson_content(src.id, new_id);
  return new_id;
end;
$$;

create or replace function public.copy_module_lessons(p_from uuid, p_to uuid)
returns void
language plpgsql
security invoker
set search_path = ''
as $$
declare
  l public.lessons;
  new_id uuid;
begin
  for l in select * from public.lessons where module_id = p_from order by position loop
    insert into public.lessons (module_id, title, position, is_test)
    values (p_to, l.title, l.position, l.is_test)
    returning id into new_id;
    perform private.copy_lesson_content(l.id, new_id);
  end loop;
end;
$$;

-- Copies one exercise (with its answer key) right after the original.
create function public.duplicate_exercise(p_id uuid)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  src public.exercises;
  new_id uuid;
begin
  select * into src from public.exercises where id = p_id;
  if not found then raise exception 'exercise not found' using errcode = 'P0002'; end if;

  update public.exercises set position = position + 1
  where section_id = src.section_id and position > src.position;

  insert into public.exercises (section_id, type, title, content, position)
  values (src.section_id, src.type, src.title, src.content, src.position + 1)
  returning id into new_id;

  insert into public.exercise_keys (exercise_id, answer_key)
  select new_id, k.answer_key from public.exercise_keys k where k.exercise_id = p_id;
  return new_id;
end;
$$;

revoke execute on function public.reorder_sections(uuid, uuid[]), public.reorder_exercises(uuid, uuid[]),
  public.move_exercise(uuid, uuid), public.duplicate_exercise(uuid) from public, anon;
grant execute on function public.reorder_sections(uuid, uuid[]), public.reorder_exercises(uuid, uuid[]),
  public.move_exercise(uuid, uuid), public.duplicate_exercise(uuid) to authenticated;
