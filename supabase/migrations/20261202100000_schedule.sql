-- Stage 5.1: the schedule.
-- An event is a lesson time for a class: once, or every week on chosen days.
-- The time is kept as the teacher set it (local time + their time zone), so a
-- weekly lesson stays at 18:00 across daylight-saving changes. One date of a
-- series can be moved or cancelled (schedule_overrides).

create table public.schedule_events (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  -- first (or the only) date, local to time_zone
  starts_on date not null,
  local_time time not null,
  time_zone text not null check (char_length(time_zone) between 1 and 64),
  duration_min smallint not null check (duration_min between 10 and 480),
  -- ISO weekdays 1 (Mon) … 7 (Sun) for a weekly series; null = one lesson
  weekdays smallint[] check (weekdays is null or (cardinality(weekdays) between 1 and 7 and weekdays <@ array[1,2,3,4,5,6,7]::smallint[])),
  -- last date of a series (optional)
  until date check (until is null or until >= starts_on),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index schedule_events_class_idx on public.schedule_events (class_id);

create table public.schedule_overrides (
  event_id uuid not null references public.schedule_events (id) on delete cascade,
  -- the date of the series this is about (local to the event's time zone)
  occurs_on date not null,
  cancelled boolean not null default false,
  -- moved to another moment (and maybe another length)
  moved_to timestamptz,
  duration_min smallint check (duration_min is null or duration_min between 10 and 480),
  primary key (event_id, occurs_on)
);

create trigger schedule_events_touch before update on public.schedule_events
  for each row execute function public.touch_updated_at();

create function private.event_class(p_event uuid)
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select class_id from public.schedule_events where id = p_event;
$$;
revoke execute on function private.event_class(uuid) from public, anon;
grant execute on function private.event_class(uuid) to authenticated;

alter table public.schedule_events enable row level security;
alter table public.schedule_overrides enable row level security;

-- The class teacher plans; the students of the class see their lessons.
create policy "schedule_events: teacher or member reads" on public.schedule_events
  for select to authenticated
  using (private.teaches_class(class_id) or private.in_class(class_id));
create policy "schedule_events: teacher manages" on public.schedule_events
  for all to authenticated
  using (private.teaches_class(class_id)) with check (private.teaches_class(class_id));

create policy "schedule_overrides: teacher or member reads" on public.schedule_overrides
  for select to authenticated
  using (private.teaches_class(private.event_class(event_id)) or private.in_class(private.event_class(event_id)));
create policy "schedule_overrides: teacher manages" on public.schedule_overrides
  for all to authenticated
  using (private.teaches_class(private.event_class(event_id)))
  with check (private.teaches_class(private.event_class(event_id)));

revoke all on public.schedule_events, public.schedule_overrides from anon, authenticated;
grant select, delete on public.schedule_events, public.schedule_overrides to authenticated;
grant insert (class_id, starts_on, local_time, time_zone, duration_min, weekdays, until) on public.schedule_events to authenticated;
grant update (starts_on, local_time, time_zone, duration_min, weekdays, until) on public.schedule_events to authenticated;
grant insert (event_id, occurs_on, cancelled, moved_to, duration_min) on public.schedule_overrides to authenticated;
grant update (cancelled, moved_to, duration_min) on public.schedule_overrides to authenticated;
