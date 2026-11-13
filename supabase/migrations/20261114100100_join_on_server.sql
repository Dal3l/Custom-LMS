-- Joining a class by invite link now runs on the app server (with the secret
-- key, after checking the signed-in user), so these API-exposed security
-- definer functions are no longer needed.
drop function public.join_class(text);
drop function public.invite_info(text);
