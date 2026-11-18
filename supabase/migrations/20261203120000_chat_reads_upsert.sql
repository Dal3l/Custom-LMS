-- The read mark is written with "insert … on conflict update", which also
-- sets class_id (to the same value): allow that, still only for the user's own
-- mark in a class they belong to.
grant update (class_id) on public.chat_reads to authenticated;
drop policy "chat_reads: own mark moves" on public.chat_reads;
create policy "chat_reads: own mark moves" on public.chat_reads
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()) and (private.teaches_class(class_id) or private.in_class(class_id)));
