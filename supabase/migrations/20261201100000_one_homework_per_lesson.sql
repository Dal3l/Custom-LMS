-- Part 3 of the owner's changes: one homework per lesson in a class.
-- Sending more exercises adds them to the same homework; students who had
-- already handed it in get it back (their answers stay) and everyone in it is
-- told about the new exercises.

-- 1. Merge homeworks sent for the same lesson in the same class into the
--    earliest one (exercises, students, answers, comments, notifications move;
--    where both had the same row, the earliest homework's row is kept).
create temporary table hw_merge on commit drop as
select h.id as old_id, k.keep_id
from public.homeworks h
join (
  select distinct on (class_id, lesson_id) class_id, lesson_id, id as keep_id
  from public.homeworks
  order by class_id, lesson_id, created_at, id
) k on k.class_id = h.class_id and k.lesson_id = h.lesson_id
where h.id <> k.keep_id;

-- Copied into the kept homework without the old rows' repeats (no
-- "new homework" notifications for this: the students already have them).
alter table public.homework_students disable trigger homework_students_notify;

insert into public.homework_exercises (homework_id, exercise_id, position)
select m.keep_id, e.exercise_id, 1000 + e.position
from public.homework_exercises e join hw_merge m on m.old_id = e.homework_id
on conflict do nothing;

insert into public.homework_students (homework_id, student_id, submitted_at, reviewed_at)
select m.keep_id, s.student_id, s.submitted_at, s.reviewed_at
from public.homework_students s join hw_merge m on m.old_id = s.homework_id
on conflict do nothing;

insert into public.homework_answers
  (homework_id, exercise_id, student_id, answer, checked_answer, result, first_answer, first_result, attempts, updated_at)
select m.keep_id, a.exercise_id, a.student_id, a.answer, a.checked_answer, a.result, a.first_answer, a.first_result, a.attempts, a.updated_at
from public.homework_answers a join hw_merge m on m.old_id = a.homework_id
on conflict do nothing;

insert into public.homework_comments (homework_id, exercise_id, student_id, body, updated_at)
select m.keep_id, c.exercise_id, c.student_id, c.body, c.updated_at
from public.homework_comments c join hw_merge m on m.old_id = c.homework_id
on conflict do nothing;

alter table public.homework_students enable trigger homework_students_notify;

update public.notifications n set homework_id = m.keep_id
from hw_merge m
where n.homework_id = m.old_id;

-- After merging, a homework counts as handed in only if every exercise in it
-- has the student's answer; otherwise it is open again for the rest.
update public.homework_students s set submitted_at = null, reviewed_at = null
where s.homework_id in (select keep_id from hw_merge)
  and s.submitted_at is not null
  and exists (
    select 1 from hw_merge m
    join public.homework_exercises e on e.homework_id = m.keep_id
    where m.keep_id = s.homework_id
      and not exists (
        select 1 from public.homework_answers a
        where a.homework_id = s.homework_id and a.exercise_id = e.exercise_id and a.student_id = s.student_id
      )
  );

delete from public.homeworks where id in (select old_id from hw_merge);

alter table public.homeworks add constraint homeworks_one_per_lesson unique (class_id, lesson_id);

-- 2. "New exercises in your homework".
alter type public.notification_kind add value if not exists 'homework_updated';

create function private.on_homework_exercise_added()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  s record;
begin
  -- Handed in already: open again for the new exercises (answers stay).
  update public.homework_students
    set submitted_at = null, reviewed_at = null
    where homework_id = new.homework_id and submitted_at is not null;
  for s in select student_id from public.homework_students where homework_id = new.homework_id loop
    perform private.notify(s.student_id, 'homework_updated', new.homework_id, s.student_id);
  end loop;
  return new;
end;
$$;
revoke execute on function private.on_homework_exercise_added() from public, anon, authenticated;

create trigger homework_exercises_added
  after insert on public.homework_exercises
  for each row execute function private.on_homework_exercise_added();
