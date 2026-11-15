-- Stage 3.1: voice answers. Students' recordings are kept in a private bucket:
--   answer-media/<class id>/<student id>/<file>
-- A student uploads and listens to their own; the class teacher listens to all.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'answer-media', 'answer-media', false, 10485760,
  array['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/mpeg', 'audio/aac', 'audio/wav', 'audio/x-m4a']
)
on conflict (id) do nothing;

-- The class id in the first folder of a path, or null.
create function private.path_class(p_name text)
returns uuid
language sql
immutable
set search_path = ''
as $$
  select case
    when (storage.foldername(p_name))[1] ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
      then ((storage.foldername(p_name))[1])::uuid
  end;
$$;
revoke execute on function private.path_class(text) from public, anon;
grant execute on function private.path_class(text) to authenticated;

create policy "answer-media: students upload into their own folder" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'answer-media'
    and (storage.foldername(name))[2] = (select auth.uid())::text
    and private.in_class(private.path_class(name))
  );
create policy "answer-media: own files and the class teacher read" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'answer-media'
    and (
      (storage.foldername(name))[2] = (select auth.uid())::text
      or private.teaches_class(private.path_class(name))
    )
  );
create policy "answer-media: students delete their own" on storage.objects
  for delete to authenticated
  using (bucket_id = 'answer-media' and (storage.foldername(name))[2] = (select auth.uid())::text);
