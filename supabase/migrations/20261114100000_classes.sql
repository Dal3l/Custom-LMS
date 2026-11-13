-- Stage 2.1: classes, their students and invite links.
-- Courses are not attached to classes: lessons are picked during a class (step 2.2).

create type public.class_kind as enum ('individual', 'group');

create table public.classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  name text not null check (char_length(trim(name)) between 1 and 100),
  kind public.class_kind not null default 'individual',
  -- Zoom / Meet / any https link opened by the "Call" button
  call_url text check (call_url is null or (call_url ~* '^https://' and char_length(call_url) <= 500)),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index classes_teacher_idx on public.classes (teacher_id);

create table public.class_members (
  class_id uuid not null references public.classes (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, student_id)
);
create index class_members_student_idx on public.class_members (student_id);

-- The invite link of a class. Kept apart from `classes` so students in the
-- class never read the token.
create table public.class_invites (
  class_id uuid primary key references public.classes (id) on delete cascade,
  token text not null unique check (token ~ '^[A-Za-z0-9_-]{16,64}$'),
  enabled boolean not null default true,
  updated_at timestamptz not null default now()
);

create trigger classes_touch before update on public.classes
  for each row execute function public.touch_updated_at();
create trigger class_invites_touch before update on public.class_invites
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Access helpers (private schema: usable by policies, not callable via the API)
-- ---------------------------------------------------------------------------
create function private.teaches_class(p_class uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.classes where id = p_class and teacher_id = (select auth.uid()));
$$;

create function private.in_class(p_class uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.class_members where class_id = p_class and student_id = (select auth.uid())
  );
$$;

revoke execute on function private.teaches_class(uuid), private.in_class(uuid) from public, anon;
grant execute on function private.teaches_class(uuid), private.in_class(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.classes enable row level security;
alter table public.class_members enable row level security;
alter table public.class_invites enable row level security;

-- Classes: the teacher manages their own; students see the classes they are in.
create policy "classes: teacher or member can read" on public.classes
  for select to authenticated
  using (teacher_id = (select auth.uid()) or private.in_class(id));
create policy "classes: teachers create their own" on public.classes
  for insert to authenticated
  with check (teacher_id = (select auth.uid()) and private.is_teacher());
create policy "classes: teacher can update" on public.classes
  for update to authenticated
  using (teacher_id = (select auth.uid())) with check (teacher_id = (select auth.uid()));
create policy "classes: teacher can delete" on public.classes
  for delete to authenticated
  using (teacher_id = (select auth.uid()));

-- Members: the teacher sees and removes students of their classes; a student
-- sees their own memberships. Joining goes through join_class() (or the server
-- when a teacher registers a student), never a direct insert.
create policy "class_members: teacher or self can read" on public.class_members
  for select to authenticated
  using (private.teaches_class(class_id) or student_id = (select auth.uid()));
create policy "class_members: teacher can remove" on public.class_members
  for delete to authenticated
  using (private.teaches_class(class_id));

-- Invites: the class teacher only.
create policy "class_invites: teacher only" on public.class_invites
  for all to authenticated
  using (private.teaches_class(class_id)) with check (private.teaches_class(class_id));

-- Profiles: a teacher sees the profiles of their students, and a student sees
-- the profiles of their teachers (names on class pages).
create policy "profiles: teacher reads their students" on public.profiles
  for select to authenticated
  using (
    exists (
      select 1 from public.class_members m
      join public.classes c on c.id = m.class_id
      where m.student_id = profiles.id and c.teacher_id = (select auth.uid())
    )
  );
create policy "profiles: student reads their teachers" on public.profiles
  for select to authenticated
  using (
    exists (
      select 1 from public.classes c
      join public.class_members m on m.class_id = c.id
      where c.teacher_id = profiles.id and m.student_id = (select auth.uid())
    )
  );

revoke all on public.classes, public.class_members, public.class_invites from anon, authenticated;
grant select, delete on public.classes, public.class_members to authenticated;
grant insert (name, kind, call_url) on public.classes to authenticated;
grant update (name, kind, call_url) on public.classes to authenticated;
grant select, insert, delete on public.class_invites to authenticated;
grant update (token, enabled) on public.class_invites to authenticated;

-- ---------------------------------------------------------------------------
-- Joining by invite link
-- ---------------------------------------------------------------------------
-- What the invite page shows before anyone signs in: class and teacher names.
create function public.invite_info(p_token text)
returns table (class_name text, teacher_name text)
language sql
stable
security definer
set search_path = ''
as $$
  select c.name, p.full_name
  from public.class_invites i
  join public.classes c on c.id = i.class_id
  join public.profiles p on p.id = c.teacher_id
  where i.token = p_token and i.enabled;
$$;

-- The signed-in user joins the class of this invite as a student.
-- A user without a role (e.g. first Google sign-in) becomes a student.
create function public.join_class(p_token text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_class uuid;
  v_role public.user_role;
begin
  if v_user is null then
    raise exception 'not signed in' using errcode = '42501';
  end if;

  select i.class_id into v_class
  from public.class_invites i
  where i.token = p_token and i.enabled;
  if v_class is null then
    raise exception 'invite not found' using errcode = 'P0002';
  end if;

  select role into v_role from public.profiles where id = v_user;
  if v_role = 'teacher' then
    raise exception 'teachers cannot join as students' using errcode = '42501';
  end if;
  if v_role is null then
    update public.profiles set role = 'student' where id = v_user;
  end if;

  insert into public.class_members (class_id, student_id)
  values (v_class, v_user)
  on conflict do nothing;
  return v_class;
end;
$$;

revoke execute on function public.invite_info(text), public.join_class(text) from public;
grant execute on function public.invite_info(text) to anon, authenticated;
grant execute on function public.join_class(text) to authenticated;
