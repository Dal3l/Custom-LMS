-- Stage 1.3: files for lesson materials (images, audio, PDF and documents).
--
-- Public bucket: files are read through long random URLs
-- ("<teacher id>/<random uuid>.<ext>"), like course covers. Each teacher can
-- upload only into their own folder. Videos are links (YouTube / Vimeo), not files.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'lesson-media', 'lesson-media', true, 52428800,
  array[
    'image/jpeg', 'image/png', 'image/webp', 'image/gif',
    'audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/aac', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'audio/webm',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  ]
)
on conflict (id) do nothing;

create policy "lesson-media: teachers upload to own folder" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'lesson-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and private.is_teacher()
  );
create policy "lesson-media: owner can read own folder" on storage.objects
  for select to authenticated
  using (bucket_id = 'lesson-media' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "lesson-media: owner can delete own files" on storage.objects
  for delete to authenticated
  using (bucket_id = 'lesson-media' and (storage.foldername(name))[1] = (select auth.uid())::text);
