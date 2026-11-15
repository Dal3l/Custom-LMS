-- Stage 3.2: homework.
-- Every lesson has a "Homework" part built in the lesson builder: sections with
-- kind = 'homework'. During a class lesson the teacher picks exercises from it
-- and sends them to the class (a homework, optionally with a due date); each
-- student of the class gets their copy (homework_students) and answers it
-- (homework_answers, written by the server only). Students see homework
-- exercises only once they were sent to them.

-- ---------------------------------------------------------------------------
-- Lesson part: 'lesson' or 'homework'
-- ---------------------------------------------------------------------------
alter table public.sections add column kind text not null default 'lesson' check (kind in ('lesson', 'homework'));
alter table public.exercises add column kind text not null default 'lesson' check (kind in ('lesson', 'homework'));
grant insert (lesson_id, title, position, kind) on public.sections to authenticated;

-- An exercise takes its kind from its section (also when moved to another one).
create or replace function public.exercises_before_write()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' or new.section_id is distinct from old.section_id then
    select lesson_id, course_id, kind into new.lesson_id, new.course_id, new.kind
    from public.sections where id = new.section_id;
  end if;
  if tg_op = 'INSERT' and new.position is null then
    select coalesce(max(position) + 1, 0) into new.position
    from public.exercises where section_id = new.section_id;
  end if;
  return new;
end;
$$;

-- Copies keep the part (lesson / homework).
create or replace function private.copy_lesson_content(p_from uuid, p_to uuid)
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
    insert into public.sections (lesson_id, title, position, kind)
    values (p_to, s.title, s.position, s.kind)
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

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------
create table public.homeworks (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  due_at timestamptz,
  created_at timestamptz not null default now()
);
create index homeworks_class_idx on public.homeworks (class_id, created_at desc);
create index homeworks_lesson_idx on public.homeworks (lesson_id);

create table public.homework_exercises (
  homework_id uuid not null references public.homeworks (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  position integer not null,
  primary key (homework_id, exercise_id)
);
create index homework_exercises_exercise_idx on public.homework_exercises (exercise_id);

create table public.homework_students (
  homework_id uuid not null references public.homeworks (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  -- set when the student presses "Hand in"
  submitted_at timestamptz,
  -- set when the teacher has looked at it (step 3.3)
  reviewed_at timestamptz,
  primary key (homework_id, student_id)
);
create index homework_students_student_idx on public.homework_students (student_id);

create table public.homework_answers (
  homework_id uuid not null references public.homeworks (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  answer jsonb not null check (pg_column_size(answer) <= 65536),
  checked_answer jsonb check (checked_answer is null or pg_column_size(checked_answer) <= 65536),
  result jsonb check (result is null or pg_column_size(result) <= 65536),
  -- the teacher sees the first try and how many tries there were
  first_answer jsonb check (first_answer is null or pg_column_size(first_answer) <= 65536),
  first_result jsonb check (first_result is null or pg_column_size(first_result) <= 65536),
  attempts integer not null default 0 check (attempts >= 0),
  updated_at timestamptz not null default now(),
  primary key (homework_id, exercise_id, student_id)
);
create index homework_answers_student_idx on public.homework_answers (student_id);

create trigger homework_answers_touch before update on public.homework_answers
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------
create function private.teaches_homework(p_homework uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.homeworks h
    join public.classes c on c.id = h.class_id
    where h.id = p_homework and c.teacher_id = (select auth.uid())
  );
$$;

-- The signed-in student got this homework (and is still in the class).
create function private.has_homework(p_homework uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.homework_students hs
    join public.homeworks h on h.id = hs.homework_id
    join public.class_members m on m.class_id = h.class_id and m.student_id = hs.student_id
    where hs.homework_id = p_homework and hs.student_id = (select auth.uid())
  );
$$;

create function private.student_has_homework_exercise(p_exercise uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.homework_exercises he
    where he.exercise_id = p_exercise and private.has_homework(he.homework_id)
  );
$$;

create function private.student_has_homework_section(p_section uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.exercises e
    where e.section_id = p_section and private.student_has_homework_exercise(e.id)
  );
$$;

revoke execute on function private.teaches_homework(uuid), private.has_homework(uuid),
  private.student_has_homework_exercise(uuid), private.student_has_homework_section(uuid) from public, anon;
grant execute on function private.teaches_homework(uuid), private.has_homework(uuid),
  private.student_has_homework_exercise(uuid), private.student_has_homework_section(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Students see lesson parts of opened lessons, and homework only once sent
-- ---------------------------------------------------------------------------
drop policy "sections: students read their class lessons" on public.sections;
drop policy "exercises: students read their class lessons" on public.exercises;
create policy "sections: students read lesson parts and their homework" on public.sections
  for select to authenticated
  using (
    (kind = 'lesson' and private.student_has_lesson(lesson_id))
    or (kind = 'homework' and private.student_has_homework_section(id))
  );
create policy "exercises: students read lesson parts and their homework" on public.exercises
  for select to authenticated
  using (
    (kind = 'lesson' and private.student_has_lesson(lesson_id))
    or (kind = 'homework' and private.student_has_homework_exercise(id))
  );

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.homeworks enable row level security;
alter table public.homework_exercises enable row level security;
alter table public.homework_students enable row level security;
alter table public.homework_answers enable row level security;

create policy "homeworks: teacher manages, students of it read" on public.homeworks
  for select to authenticated
  using (private.teaches_class(class_id) or private.has_homework(id));
create policy "homeworks: teacher sends for class lessons" on public.homeworks
  for insert to authenticated
  with check (
    private.teaches_class(class_id)
    and exists (select 1 from public.class_lessons cl where cl.class_id = homeworks.class_id and cl.lesson_id = homeworks.lesson_id)
  );
create policy "homeworks: teacher changes" on public.homeworks
  for update to authenticated
  using (private.teaches_class(class_id)) with check (private.teaches_class(class_id));
create policy "homeworks: teacher deletes" on public.homeworks
  for delete to authenticated using (private.teaches_class(class_id));

create policy "homework_exercises: teacher or student of it reads" on public.homework_exercises
  for select to authenticated
  using (private.teaches_homework(homework_id) or private.has_homework(homework_id));
create policy "homework_exercises: teacher adds the lesson homework" on public.homework_exercises
  for insert to authenticated
  with check (
    private.teaches_homework(homework_id)
    and exists (
      select 1 from public.exercises e join public.homeworks h on h.id = homework_exercises.homework_id
      where e.id = homework_exercises.exercise_id and e.lesson_id = h.lesson_id and e.kind = 'homework'
    )
  );

create policy "homework_students: teacher or the student reads" on public.homework_students
  for select to authenticated
  using (private.teaches_homework(homework_id) or (student_id = (select auth.uid()) and private.has_homework(homework_id)));
create policy "homework_students: teacher adds students of the class" on public.homework_students
  for insert to authenticated
  with check (
    private.teaches_homework(homework_id)
    and exists (
      select 1 from public.homeworks h join public.class_members m on m.class_id = h.class_id
      where h.id = homework_students.homework_id and m.student_id = homework_students.student_id
    )
  );
create policy "homework_students: teacher updates" on public.homework_students
  for update to authenticated
  using (private.teaches_homework(homework_id)) with check (private.teaches_homework(homework_id));

create policy "homework_answers: student reads own" on public.homework_answers
  for select to authenticated
  using (student_id = (select auth.uid()) and private.has_homework(homework_id));
create policy "homework_answers: teacher reads" on public.homework_answers
  for select to authenticated
  using (private.teaches_homework(homework_id));

revoke all on public.homeworks, public.homework_exercises, public.homework_students, public.homework_answers from anon, authenticated;
grant select, delete on public.homeworks to authenticated;
grant insert (class_id, lesson_id, due_at) on public.homeworks to authenticated;
grant update (due_at) on public.homeworks to authenticated;
grant select on public.homework_exercises to authenticated;
grant insert (homework_id, exercise_id, position) on public.homework_exercises to authenticated;
grant select on public.homework_students to authenticated;
grant insert (homework_id, student_id) on public.homework_students to authenticated;
grant update (reviewed_at) on public.homework_students to authenticated;
grant select on public.homework_answers to authenticated;

-- The teacher sees homework answers and hand-ins live (step 3.3).
alter publication supabase_realtime add table public.homework_answers, public.homework_students;
