-- Finishing stage 2.
-- 1) Drawings in a class: the shared whiteboard of a lesson, whiteboard blocks
--    inside lessons, and pen/marker notes on PDF pages. Each stroke/shape/text is
--    one row, so several people can draw at once. `board` names the surface:
--      lesson:<lesson id>        the lesson's whiteboard (everyone sees everything)
--      block:<exercise id>       a whiteboard block in a lesson
--      file:<exercise id>:<page> notes on a PDF page
create table public.board_items (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  board text not null check (board ~ '^(lesson|block):[0-9a-f-]{36}$' or board ~ '^file:[0-9a-f-]{36}:[0-9]{1,4}$'),
  author_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  -- { kind: "pen" | "marker" | "line" | "rect" | "ellipse" | "text", color, width, points | from/to | text … }
  data jsonb not null check (jsonb_typeof(data) = 'object' and pg_column_size(data) <= 65536),
  created_at timestamptz not null default now()
);
create index board_items_board_idx on public.board_items (class_id, board, created_at);

alter table public.board_items enable row level security;

create policy "board_items: class reads" on public.board_items
  for select to authenticated
  using (private.teaches_class(class_id) or private.in_class(class_id));
create policy "board_items: class draws as themselves" on public.board_items
  for insert to authenticated
  with check (author_id = (select auth.uid()) and (private.teaches_class(class_id) or private.in_class(class_id)));
-- Undo removes one's own items; the teacher may clear everything.
create policy "board_items: own or teacher removes" on public.board_items
  for delete to authenticated
  using (
    private.teaches_class(class_id)
    or (author_id = (select auth.uid()) and private.in_class(class_id))
  );

revoke all on public.board_items from anon, authenticated;
grant select, delete on public.board_items to authenticated;
grant insert (class_id, board, author_id, data) on public.board_items to authenticated;

-- Deletions must reach other browsers with the board's name (to remove the right item).
alter table public.board_items replica identity full;
alter publication supabase_realtime add table public.board_items;

-- 2) The lesson timer the teacher starts: everyone sees the same countdown.
alter table public.class_lessons add column timer_ends_at timestamptz;
grant update (timer_ends_at) on public.class_lessons to authenticated;
