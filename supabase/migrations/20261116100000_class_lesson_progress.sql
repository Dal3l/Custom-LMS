-- Feedback on 2.2: a lesson counts as done only when the teacher finishes it,
-- and the teacher marks sections as finished one by one.
--   status       'live' = the lesson going on now, 'open' = opened before, not current
--   finished_at  set when the teacher pressed "Finish lesson" (null = not finished)
--   done_sections  sections the teacher marked as finished
-- Opening the next lesson no longer finishes the previous one.

alter table public.class_lessons drop constraint class_lessons_status_check;
update public.class_lessons set status = 'open' where status = 'done';
alter table public.class_lessons add constraint class_lessons_status_check check (status in ('live', 'open'));

alter table public.class_lessons
  add column done_sections uuid[] not null default '{}' check (cardinality(done_sections) <= 200);

grant update (done_sections) on public.class_lessons to authenticated;
