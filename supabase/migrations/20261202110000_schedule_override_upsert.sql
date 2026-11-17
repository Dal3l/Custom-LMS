-- Moving or cancelling one date writes the override with "insert … on conflict
-- update", which also sets the key columns (to the same values): allow that.
-- RLS still limits it to the class teacher.
grant update (event_id, occurs_on) on public.schedule_overrides to authenticated;
