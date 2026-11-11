-- Access-check helpers live in a schema the Data API does not expose, so they
-- can be used by policies but not called directly as /rest/v1/rpc/… endpoints.
-- Policies reference functions by identity, so they keep working after the move.

create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

alter function public.is_teacher() set schema private;
alter function public.is_admin() set schema private;
alter function public.owns_course(uuid) set schema private;
alter function public.can_view_course(uuid) set schema private;

-- Its body named public.is_teacher(); point it at the new location.
create or replace function private.can_view_course(p_course uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.courses c
    where c.id = p_course
      and (
        c.owner_id = (select auth.uid())
        or (c.is_library and c.is_published and private.is_teacher())
      )
  );
$$;
