-- Stage 0: user profiles.
-- One row per auth user, created automatically on sign-up.

create type public.user_role as enum ('teacher', 'student');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  -- null until the user picks a role (Google sign-ups pick it on the onboarding screen)
  role public.user_role,
  full_name text not null default '' check (char_length(full_name) <= 100),
  locale text not null default 'ru' check (locale in ('ru', 'en', 'kk')),
  timezone text not null default 'UTC' check (char_length(timezone) <= 64),
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Public profile of each user: role, name, interface language, time zone.';

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;

-- Stage 0: every user sees and edits only their own profile.
-- (Stage 2 adds a policy for teachers to see their students' profiles.)
create policy "profiles: owner can read"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

create policy "profiles: owner can update"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- No insert/delete policies: rows are created by the trigger below and
-- removed together with the auth user.

-- Column-level privileges: users may change only these columns.
-- id, is_admin and timestamps cannot be changed from the app.
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
grant update (role, full_name, locale, timezone) on public.profiles to authenticated;

-- ---------------------------------------------------------------------------
-- Guards
-- ---------------------------------------------------------------------------
-- The role can be chosen once (null -> teacher/student) and never changed by
-- the user afterwards. Also keeps updated_at fresh and the time zone valid.
create function public.profiles_before_update()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if old.role is not null and new.role is distinct from old.role
     and (select auth.role()) <> 'service_role' then
    raise exception 'role cannot be changed' using errcode = '42501';
  end if;

  if not exists (select 1 from pg_catalog.pg_timezone_names where name = new.timezone) then
    raise exception 'invalid time zone' using errcode = '22023';
  end if;

  new.updated_at := now();
  return new;
end;
$$;

create trigger profiles_before_update
  before update on public.profiles
  for each row execute function public.profiles_before_update();

-- ---------------------------------------------------------------------------
-- Create a profile for every new auth user
-- ---------------------------------------------------------------------------
-- Reads optional sign-up data (role, full_name, locale, timezone) from the
-- user's metadata. is_admin is never taken from metadata.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  v_role public.user_role;
  v_name text;
  v_locale text;
  v_timezone text;
begin
  v_role := case meta ->> 'role'
    when 'teacher' then 'teacher'::public.user_role
    when 'student' then 'student'::public.user_role
    else null
  end;

  -- Google puts the name into full_name / name.
  v_name := left(trim(coalesce(meta ->> 'full_name', meta ->> 'name', '')), 100);

  v_locale := case when meta ->> 'locale' in ('ru', 'en', 'kk') then meta ->> 'locale' else 'ru' end;

  v_timezone := coalesce(meta ->> 'timezone', 'UTC');
  if not exists (select 1 from pg_catalog.pg_timezone_names where name = v_timezone) then
    v_timezone := 'UTC';
  end if;

  insert into public.profiles (id, role, full_name, locale, timezone)
  values (new.id, v_role, v_name, v_locale, v_timezone);

  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Accounts created before this migration (e.g. test sign-ups) get a profile too.
insert into public.profiles (id, full_name)
select u.id, left(trim(coalesce(u.raw_user_meta_data ->> 'full_name', u.raw_user_meta_data ->> 'name', '')), 100)
from auth.users u
on conflict (id) do nothing;
