-- Stage 4.3: the word trainer.
-- Each word climbs a ladder: 0 new → 1 card passed → 2 picked the translation
-- → 3 wrote it → 4 wrote it by ear = learned. A mistake moves it one step
-- down. FSRS (ts-fsrs) keeps the word's memory state; once learned, FSRS decides
-- when it comes back for a check.

alter table public.vocabulary
  add column stage smallint not null default 0 check (stage between 0 and 4),
  -- the FSRS card (JSON from ts-fsrs); null until the first review
  add column fsrs jsonb check (fsrs is null or pg_column_size(fsrs) <= 4096),
  -- when the word is next shown in the trainer
  add column due timestamptz not null default now(),
  add column learned_at timestamptz,
  add column reviews integer not null default 0 check (reviews >= 0);
create index vocabulary_student_due_idx on public.vocabulary (student_id, due);

-- The trainer saves the student's progress (the server computes it). The
-- edit policy stays as in 4.1 (re-created unchanged here); the app only
-- changes these columns from the student's own trainer.
grant update (stage, fsrs, due, learned_at, reviews) on public.vocabulary to authenticated;
drop policy "vocabulary: student, or the teacher who added it, edits" on public.vocabulary;
create policy "vocabulary: student, or the teacher who added it, edits" on public.vocabulary
  for update to authenticated
  using (
    student_id = (select auth.uid())
    or (added_by = (select auth.uid()) and private.teaches_student(student_id))
  )
  with check (
    student_id = (select auth.uid())
    or (added_by = (select auth.uid()) and private.teaches_student(student_id))
  );

-- Every answer in the trainer (for the teacher's progress view and statistics).
create table public.vocabulary_reviews (
  id uuid primary key default gen_random_uuid(),
  word_id uuid not null references public.vocabulary (id) on delete cascade,
  student_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  mode text not null check (mode in ('card', 'choice', 'write', 'listen')),
  correct boolean not null,
  -- FSRS grade: 1 again, 2 hard, 3 good, 4 easy
  grade smallint not null check (grade between 1 and 4),
  stage_before smallint not null check (stage_before between 0 and 4),
  stage_after smallint not null check (stage_after between 0 and 4),
  reviewed_at timestamptz not null default now()
);
create index vocabulary_reviews_word_idx on public.vocabulary_reviews (word_id);
create index vocabulary_reviews_student_idx on public.vocabulary_reviews (student_id, reviewed_at desc);

alter table public.vocabulary_reviews enable row level security;
create policy "vocabulary_reviews: student or their teacher reads" on public.vocabulary_reviews
  for select to authenticated
  using (student_id = (select auth.uid()) or private.teaches_student(student_id));
create policy "vocabulary_reviews: the student adds for their own words" on public.vocabulary_reviews
  for insert to authenticated
  with check (
    student_id = (select auth.uid())
    and exists (select 1 from public.vocabulary v where v.id = word_id and v.student_id = (select auth.uid()))
  );

revoke all on public.vocabulary_reviews from anon, authenticated;
grant select on public.vocabulary_reviews to authenticated;
grant insert (word_id, mode, correct, grade, stage_before, stage_after) on public.vocabulary_reviews to authenticated;
