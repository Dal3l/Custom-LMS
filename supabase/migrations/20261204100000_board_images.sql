-- Whiteboard: pictures. Files are kept in a private bucket, in the class's
-- folder and the author's subfolder: <class id>/<author id>/<uuid>.<ext>.
-- Everyone in the class (the teacher and the students) can add a picture and
-- see the class's pictures; nobody else can.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('board-images', 'board-images', false, 10485760, array['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
on conflict (id) do nothing;

create policy "board-images: class people upload into their own folder" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'board-images'
    and (storage.foldername(name))[2] = (select auth.uid())::text
    and (private.in_class(private.path_class(name)) or private.teaches_class(private.path_class(name)))
  );
create policy "board-images: class people read" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'board-images'
    and (private.in_class(private.path_class(name)) or private.teaches_class(private.path_class(name)))
  );
create policy "board-images: own or teacher removes" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'board-images'
    and (
      (storage.foldername(name))[2] = (select auth.uid())::text
      or private.teaches_class(private.path_class(name))
    )
  );
