-- Stage 5.2: a chat in every class (the teacher and the class's students):
-- text, pictures and files, read marks, live updates.

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  author_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  body text not null default '' check (char_length(body) <= 4000),
  -- a file in the chat-files bucket: <class id>/<author id>/<uuid>-<name>
  file_path text check (file_path is null or char_length(file_path) <= 400),
  file_name text check (file_name is null or char_length(file_name) <= 200),
  file_type text check (file_type is null or char_length(file_type) <= 100),
  file_size integer check (file_size is null or file_size between 0 and 20971520),
  created_at timestamptz not null default now(),
  -- deleted messages stay as "message deleted" (live updates can't filter deletes)
  deleted_at timestamptz,
  check (deleted_at is not null or char_length(trim(body)) > 0 or file_path is not null)
);
create index chat_messages_class_idx on public.chat_messages (class_id, created_at desc);
create index chat_messages_author_idx on public.chat_messages (author_id);

-- Up to when each person has read a class's chat.
create table public.chat_reads (
  class_id uuid not null references public.classes (id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  last_read_at timestamptz not null default now(),
  primary key (class_id, user_id)
);
create index chat_reads_user_idx on public.chat_reads (user_id);

alter table public.chat_messages enable row level security;
alter table public.chat_reads enable row level security;

-- The teacher and the students of the class read and write; nobody else.
create policy "chat_messages: class people read" on public.chat_messages
  for select to authenticated
  using (private.teaches_class(class_id) or private.in_class(class_id));
create policy "chat_messages: class people write as themselves" on public.chat_messages
  for insert to authenticated
  with check (
    author_id = (select auth.uid())
    and deleted_at is null
    and (private.teaches_class(class_id) or private.in_class(class_id))
    and (file_path is null or (storage.foldername(file_path))[1] = class_id::text and (storage.foldername(file_path))[2] = (select auth.uid())::text)
  );

create policy "chat_reads: class people read" on public.chat_reads
  for select to authenticated
  using (private.teaches_class(class_id) or private.in_class(class_id));
create policy "chat_reads: own mark" on public.chat_reads
  for insert to authenticated
  with check (user_id = (select auth.uid()) and (private.teaches_class(class_id) or private.in_class(class_id)));
create policy "chat_reads: own mark moves" on public.chat_reads
  for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

revoke all on public.chat_messages, public.chat_reads from anon, authenticated;
grant select on public.chat_messages to authenticated;
grant insert (class_id, body, file_path, file_name, file_type, file_size) on public.chat_messages to authenticated;
grant select on public.chat_reads to authenticated;
grant insert (class_id, last_read_at) on public.chat_reads to authenticated;
grant update (last_read_at) on public.chat_reads to authenticated;

-- Deleting: the author, or the class teacher. The message becomes "deleted".
create function public.delete_chat_message(p_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  m public.chat_messages;
begin
  select * into m from public.chat_messages where id = p_id;
  if m.id is null or not (m.author_id = (select auth.uid()) or private.teaches_class(m.class_id)) then
    raise exception 'not allowed' using errcode = '42501';
  end if;
  update public.chat_messages
    set deleted_at = now(), body = '', file_path = null, file_name = null, file_type = null, file_size = null
    where id = p_id;
  if m.file_path is not null then
    delete from storage.objects where bucket_id = 'chat-files' and name = m.file_path;
  end if;
end;
$$;
revoke execute on function public.delete_chat_message(uuid) from public, anon;
grant execute on function public.delete_chat_message(uuid) to authenticated;

-- The people of a class (names for the chat; students may not read each
-- other's profiles otherwise).
create function public.class_people(p_class uuid)
returns table (id uuid, full_name text, is_teacher boolean)
language sql
stable
security definer
set search_path = ''
as $$
  select p.id, p.full_name, p.id = c.teacher_id
  from public.classes c
  join public.profiles p on p.id = c.teacher_id
     or p.id in (select m.student_id from public.class_members m where m.class_id = c.id)
  where c.id = p_class and (private.teaches_class(p_class) or private.in_class(p_class));
$$;
revoke execute on function public.class_people(uuid) from public, anon;
grant execute on function public.class_people(uuid) to authenticated;

-- Unread messages per class for the signed-in user (others' messages after their mark).
create function public.my_chat_unread()
returns table (class_id uuid, unread bigint)
language sql
stable
security invoker
set search_path = ''
as $$
  select m.class_id, count(*)
  from public.chat_messages m
  left join public.chat_reads r on r.class_id = m.class_id and r.user_id = (select auth.uid())
  where m.author_id <> (select auth.uid())
    and m.deleted_at is null
    and (r.last_read_at is null or m.created_at > r.last_read_at)
  group by m.class_id;
$$;
revoke execute on function public.my_chat_unread() from public, anon;
grant execute on function public.my_chat_unread() to authenticated;

alter publication supabase_realtime add table public.chat_messages, public.chat_reads;

-- Files: chat-files/<class id>/<author id>/<file>; the class reads them, the author uploads.
insert into storage.buckets (id, name, public, file_size_limit)
values ('chat-files', 'chat-files', false, 20971520)
on conflict (id) do nothing;

create policy "chat-files: class people upload into their own folder" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'chat-files'
    and (storage.foldername(name))[2] = (select auth.uid())::text
    and (private.in_class(private.path_class(name)) or private.teaches_class(private.path_class(name)))
  );
create policy "chat-files: class people read" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'chat-files'
    and (private.in_class(private.path_class(name)) or private.teaches_class(private.path_class(name)))
  );
