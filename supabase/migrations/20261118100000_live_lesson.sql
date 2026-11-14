-- Stage 2.4: live lesson.
-- 1) Changes to opened lessons and to answers are pushed to browsers (Realtime
--    "postgres changes"); each browser only receives rows its RLS lets it read:
--    students — their classes' lessons (auto-open) and their own answers,
--    teachers — everything in their classes (answers as students type).
-- 2) A private channel "class:<class id>" per class for presence (who is online,
--    in which section) and for the teacher's "Show to student" messages.

alter publication supabase_realtime add table public.class_lessons, public.class_answers;

-- The class id of a "class:<uuid>" channel, or null for any other topic.
create function private.class_topic_id(p_topic text)
returns uuid
language sql
immutable
set search_path = ''
as $$
  select case
    when p_topic ~ '^class:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
      then substr(p_topic, 7)::uuid
  end;
$$;
revoke execute on function private.class_topic_id(text) from public, anon;
grant execute on function private.class_topic_id(text) to authenticated;

-- Receive: the class teacher and the class's students.
create policy "class channel: teacher and students receive" on realtime.messages
  for select to authenticated
  using (
    private.teaches_class(private.class_topic_id((select realtime.topic())))
    or private.in_class(private.class_topic_id((select realtime.topic())))
  );

-- Send: the teacher anything (e.g. "Show to student"); students only their presence.
create policy "class channel: teacher sends, students share presence" on realtime.messages
  for insert to authenticated
  with check (
    private.teaches_class(private.class_topic_id((select realtime.topic())))
    or (
      realtime.messages.extension = 'presence'
      and private.in_class(private.class_topic_id((select realtime.topic())))
    )
  );
