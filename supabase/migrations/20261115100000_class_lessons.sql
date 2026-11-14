-- Stage 2.2: lessons opened in a class.
-- A row appears when the teacher opens a lesson in the class ("live"); it becomes
-- "done" when the lesson is finished or the next one is opened. Students of the
-- class can see these lessons (and only these) with their content, never the keys.

create table public.class_lessons (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  status text not null default 'live' check (status in ('live', 'done')),
  opened_at timestamptz not null default now(),
  finished_at timestamptz,
  unique (class_id, lesson_id)
);
-- At most one lesson is going on in a class at a time.
create unique index class_lessons_one_live on public.class_lessons (class_id) where status = 'live';
create index class_lessons_lesson_idx on public.class_lessons (lesson_id);

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------
-- The signed-in student is in a class where this lesson was opened.
create function private.student_has_lesson(p_lesson uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.class_lessons cl
    join public.class_members m on m.class_id = cl.class_id
    where cl.lesson_id = p_lesson and m.student_id = (select auth.uid())
  );
$$;

create function private.student_has_course(p_course uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.class_lessons cl
    join public.lessons l on l.id = cl.lesson_id
    join public.class_members m on m.class_id = cl.class_id
    where l.course_id = p_course and m.student_id = (select auth.uid())
  );
$$;

-- The teacher may open this lesson: their own course or a published library course.
create function private.can_use_lesson(p_lesson uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.lessons where id = p_lesson and private.can_view_course(course_id));
$$;

revoke execute on function private.student_has_lesson(uuid), private.student_has_course(uuid),
  private.can_use_lesson(uuid) from public, anon;
grant execute on function private.student_has_lesson(uuid), private.student_has_course(uuid),
  private.can_use_lesson(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.class_lessons enable row level security;

create policy "class_lessons: teacher or student of the class can read" on public.class_lessons
  for select to authenticated
  using (private.teaches_class(class_id) or private.in_class(class_id));
create policy "class_lessons: teacher opens lessons they can use" on public.class_lessons
  for insert to authenticated
  with check (private.teaches_class(class_id) and private.can_use_lesson(lesson_id));
create policy "class_lessons: teacher can update" on public.class_lessons
  for update to authenticated
  using (private.teaches_class(class_id)) with check (private.teaches_class(class_id));
create policy "class_lessons: teacher can delete" on public.class_lessons
  for delete to authenticated
  using (private.teaches_class(class_id));

revoke all on public.class_lessons from anon, authenticated;
grant select, delete on public.class_lessons to authenticated;
grant insert (class_id, lesson_id, status) on public.class_lessons to authenticated;
grant update (status, opened_at, finished_at) on public.class_lessons to authenticated;

-- Students read the lessons opened in their classes, with the course name and
-- language, sections and exercises. Answer keys stay owner-only.
create policy "courses: students read courses of their class lessons" on public.courses
  for select to authenticated using (private.student_has_course(id));
create policy "lessons: students read their class lessons" on public.lessons
  for select to authenticated using (private.student_has_lesson(id));
create policy "sections: students read their class lessons" on public.sections
  for select to authenticated using (private.student_has_lesson(lesson_id));
create policy "exercises: students read their class lessons" on public.exercises
  for select to authenticated using (private.student_has_lesson(lesson_id));
