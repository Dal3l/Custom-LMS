-- "My students": every student a teacher works with, also those not (yet) in
-- a class (registered on the Students page). Filled by the server when the
-- teacher registers a student, and by the database whenever a student joins
-- one of the teacher's classes.

create table public.teacher_students (
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (teacher_id, student_id)
);
create index teacher_students_student_idx on public.teacher_students (student_id);

alter table public.teacher_students enable row level security;

-- The teacher sees and removes entries of their own list; the student sees who
-- their teachers are. Adding: only the server (after its checks) and the
-- trigger below.
create policy "teacher_students: teacher or the student reads" on public.teacher_students
  for select to authenticated
  using (teacher_id = (select auth.uid()) or student_id = (select auth.uid()));
create policy "teacher_students: teacher removes from their list" on public.teacher_students
  for delete to authenticated
  using (teacher_id = (select auth.uid()));

revoke all on public.teacher_students from anon, authenticated;
grant select, delete on public.teacher_students to authenticated;

-- A teacher reads the profiles (names) of everyone on their list.
create policy "profiles: teacher reads their listed students" on public.profiles
  for select to authenticated
  using (
    exists (
      select 1 from public.teacher_students ts
      where ts.student_id = profiles.id and ts.teacher_id = (select auth.uid())
    )
  );

-- Joining a class puts the student on the class teacher's list.
create function private.on_class_member_added()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.teacher_students (teacher_id, student_id)
  select c.teacher_id, new.student_id from public.classes c where c.id = new.class_id
  on conflict do nothing;
  return new;
end;
$$;
revoke execute on function private.on_class_member_added() from public, anon, authenticated;

create trigger class_members_list_student
  after insert on public.class_members
  for each row execute function private.on_class_member_added();

-- Everyone already in a class.
insert into public.teacher_students (teacher_id, student_id, created_at)
select c.teacher_id, m.student_id, min(m.joined_at)
from public.class_members m join public.classes c on c.id = m.class_id
group by c.teacher_id, m.student_id
on conflict do nothing;
