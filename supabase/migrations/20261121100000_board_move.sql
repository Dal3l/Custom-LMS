-- Whiteboard: things already drawn can be moved with the hand tool. Each person
-- moves their own; the teacher may move anything.
create policy "board_items: own or teacher moves" on public.board_items
  for update to authenticated
  using (
    private.teaches_class(class_id)
    or (author_id = (select auth.uid()) and private.in_class(class_id))
  )
  with check (
    private.teaches_class(class_id)
    or (author_id = (select auth.uid()) and private.in_class(class_id))
  );
grant update (data) on public.board_items to authenticated;
