-- Stage 3.3: the teacher checks homework. A comment per exercise of a
-- student's homework (the right variant, an explanation); the student sees it
-- next to the exercise.
create table public.homework_comments (
  homework_id uuid not null references public.homeworks (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  body text not null check (char_length(body) <= 2000),
  updated_at timestamptz not null default now(),
  primary key (homework_id, exercise_id, student_id)
);
create index homework_comments_student_idx on public.homework_comments (student_id);

create trigger homework_comments_touch before update on public.homework_comments
  for each row execute function public.touch_updated_at();

alter table public.homework_comments enable row level security;

create policy "homework_comments: teacher reads" on public.homework_comments
  for select to authenticated using (private.teaches_homework(homework_id));
create policy "homework_comments: the student reads theirs" on public.homework_comments
  for select to authenticated
  using (student_id = (select auth.uid()) and private.has_homework(homework_id));
create policy "homework_comments: teacher writes for students of the homework" on public.homework_comments
  for insert to authenticated
  with check (
    private.teaches_homework(homework_id)
    and exists (
      select 1 from public.homework_students hs
      where hs.homework_id = homework_comments.homework_id and hs.student_id = homework_comments.student_id
    )
    and exists (
      select 1 from public.homework_exercises he
      where he.homework_id = homework_comments.homework_id and he.exercise_id = homework_comments.exercise_id
    )
  );
create policy "homework_comments: teacher edits" on public.homework_comments
  for update to authenticated
  using (private.teaches_homework(homework_id)) with check (private.teaches_homework(homework_id));
create policy "homework_comments: teacher removes" on public.homework_comments
  for delete to authenticated using (private.teaches_homework(homework_id));

revoke all on public.homework_comments from anon, authenticated;
grant select, delete on public.homework_comments to authenticated;
grant insert (homework_id, exercise_id, student_id, body) on public.homework_comments to authenticated;
grant update (body) on public.homework_comments to authenticated;
