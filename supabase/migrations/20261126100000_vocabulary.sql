-- Stage 4.1: the student's personal dictionary.
-- One list per student, shared by all their classes. Words come from the
-- teacher during a lesson ("+ to the student's dictionary") or from the
-- student (typed in, or selected in a lesson text). Each word remembers where
-- it came from (course / lesson / class). Training state (FSRS) comes in 4.2.

create table public.vocabulary (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles (id) on delete cascade,
  term text not null check (char_length(trim(term)) between 1 and 200),
  translation text not null default '' check (char_length(translation) <= 500),
  transcription text not null default '' check (char_length(transcription) <= 200),
  example text not null default '' check (char_length(example) <= 1000),
  -- pronunciation recording from the dictionary service (English), if any
  audio_url text check (audio_url is null or (audio_url ~* '^https://' and char_length(audio_url) <= 500)),
  -- the language of the word (the course language), e.g. "en"
  language text not null check (language ~ '^[a-z]{2,3}$'),
  course_id uuid references public.courses (id) on delete set null,
  lesson_id uuid references public.lessons (id) on delete set null,
  class_id uuid references public.classes (id) on delete set null,
  -- who added it: the student or their teacher
  added_by uuid default auth.uid() references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
-- A word is in a student's dictionary once (per language, ignoring case).
create unique index vocabulary_student_term_idx on public.vocabulary (student_id, language, lower(trim(term)));
create index vocabulary_student_created_idx on public.vocabulary (student_id, created_at desc);
create index vocabulary_course_idx on public.vocabulary (course_id);
create index vocabulary_lesson_idx on public.vocabulary (lesson_id);
create index vocabulary_class_idx on public.vocabulary (class_id);
create index vocabulary_added_by_idx on public.vocabulary (added_by);

create trigger vocabulary_touch before update on public.vocabulary
  for each row execute function public.touch_updated_at();

-- The signed-in teacher teaches this student (in any of their classes).
create function private.teaches_student(p_student uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.class_members m
    join public.classes c on c.id = m.class_id
    where m.student_id = p_student and c.teacher_id = (select auth.uid())
  );
$$;
revoke execute on function private.teaches_student(uuid) from public, anon;
grant execute on function private.teaches_student(uuid) to authenticated;

alter table public.vocabulary enable row level security;

-- The student manages their own words; their teachers see them and add words.
create policy "vocabulary: student or their teacher reads" on public.vocabulary
  for select to authenticated
  using (student_id = (select auth.uid()) or private.teaches_student(student_id));
create policy "vocabulary: student or their teacher adds" on public.vocabulary
  for insert to authenticated
  with check (
    added_by = (select auth.uid())
    and (student_id = (select auth.uid()) or private.teaches_student(student_id))
  );
-- Editing / removing: the student any of their words; a teacher the words they added.
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
create policy "vocabulary: student, or the teacher who added it, removes" on public.vocabulary
  for delete to authenticated
  using (
    student_id = (select auth.uid())
    or (added_by = (select auth.uid()) and private.teaches_student(student_id))
  );

revoke all on public.vocabulary from anon, authenticated;
grant select, delete on public.vocabulary to authenticated;
grant insert (student_id, term, translation, transcription, example, audio_url, language, course_id, lesson_id, class_id)
  on public.vocabulary to authenticated;
grant update (term, translation, transcription, example, audio_url) on public.vocabulary to authenticated;
