-- Trigger functions are only run by the database itself. Keep this one (which
-- has elevated rights) out of the exposed schema and not callable by users.
alter function public.lessons_after_course_change() set schema private;
revoke execute on function private.lessons_after_course_change() from public, anon, authenticated;
