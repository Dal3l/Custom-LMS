-- Deleting a chat message and listing a class's people are done by the
-- server (after its own checks) instead of database functions callable by
-- every signed-in user.
drop function public.delete_chat_message(uuid);
drop function public.class_people(uuid);
