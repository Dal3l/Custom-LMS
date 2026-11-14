-- Stage 2.5: teacher tools in a live lesson.
-- 1) "Show the right answers": exercises whose answers the teacher revealed in
--    this class lesson. The answers themselves are sent by the app server.
alter table public.class_lessons
  add column revealed uuid[] not null default '{}' check (cardinality(revealed) <= 500);
grant update (revealed) on public.class_lessons to authenticated;

-- 2) Highlights in texts, shared in the class: the teacher sees a student's,
--    students see the teacher's. One row per person, class and exercise.
create table public.class_marks (
  class_id uuid not null references public.classes (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  -- [{ from, to, text }] positions in the text
  ranges jsonb not null default '[]'
    check (jsonb_typeof(ranges) = 'array' and jsonb_array_length(ranges) <= 200 and pg_column_size(ranges) <= 32768),
  updated_at timestamptz not null default now(),
  primary key (class_id, exercise_id, user_id)
);
create index class_marks_exercise_idx on public.class_marks (class_id, exercise_id);

create trigger class_marks_touch before update on public.class_marks
  for each row execute function public.touch_updated_at();

-- The teacher of the class (whose highlights every student of the class sees).
create function private.is_class_teacher(p_class uuid, p_user uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.classes where id = p_class and teacher_id = p_user);
$$;
revoke execute on function private.is_class_teacher(uuid, uuid) from public, anon;
grant execute on function private.is_class_teacher(uuid, uuid) to authenticated;

alter table public.class_marks enable row level security;

create policy "class_marks: teacher reads the class" on public.class_marks
  for select to authenticated using (private.teaches_class(class_id));
create policy "class_marks: students read own and the teacher's" on public.class_marks
  for select to authenticated
  using (
    private.in_class(class_id)
    and (user_id = (select auth.uid()) or private.is_class_teacher(class_id, user_id))
  );
create policy "class_marks: own rows, in own classes" on public.class_marks
  for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and (private.teaches_class(class_id) or private.in_class(class_id))
  );
create policy "class_marks: update own" on public.class_marks
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()) and (private.teaches_class(class_id) or private.in_class(class_id)));

revoke all on public.class_marks from anon, authenticated;
grant select on public.class_marks to authenticated;
grant insert (class_id, exercise_id, user_id, ranges) on public.class_marks to authenticated;
grant update (ranges) on public.class_marks to authenticated;

alter publication supabase_realtime add table public.class_marks;
