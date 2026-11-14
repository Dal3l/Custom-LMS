-- Stage 2.3: students' answers in class lessons are saved.
-- One row per student, class and exercise. Written only by the app server
-- (after it has checked that the student is in the class and the lesson was
-- opened there), so the verdict in `result` cannot be forged from the browser.

create table public.class_answers (
  class_id uuid not null references public.classes (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  -- the student's current answer, in the exercise type's answer format
  answer jsonb not null check (pg_column_size(answer) <= 65536),
  -- the answer as it was when last checked, and the server's verdict for it
  checked_answer jsonb check (checked_answer is null or pg_column_size(checked_answer) <= 65536),
  result jsonb check (result is null or pg_column_size(result) <= 65536),
  updated_at timestamptz not null default now(),
  primary key (class_id, exercise_id, student_id)
);
create index class_answers_lesson_idx on public.class_answers (class_id, lesson_id);
create index class_answers_student_idx on public.class_answers (student_id);

create trigger class_answers_touch before update on public.class_answers
  for each row execute function public.touch_updated_at();

alter table public.class_answers enable row level security;

-- Read: the student their own answers (while in the class), the teacher the
-- answers in their classes. No insert/update/delete from the browser.
create policy "class_answers: student reads own" on public.class_answers
  for select to authenticated
  using (student_id = (select auth.uid()) and private.in_class(class_id));
create policy "class_answers: teacher reads class answers" on public.class_answers
  for select to authenticated
  using (private.teaches_class(class_id));

revoke all on public.class_answers from anon, authenticated;
grant select on public.class_answers to authenticated;
