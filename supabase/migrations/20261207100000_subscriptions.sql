-- Subscriptions: a free 30-day trial for every teacher, then a paid plan.
-- Payment is manual for now (a Kaspi transfer): the admin extends access on
-- the admin page. Promo codes add free days.
--
-- Only the app server (secret key) changes these tables. A teacher can read
-- their own subscription; promo codes are never readable from the browser.

-- ---------------------------------------------------------------------------
-- Subscriptions (one row per teacher)
-- ---------------------------------------------------------------------------
create table public.subscriptions (
  teacher_id uuid primary key references public.profiles (id) on delete cascade,
  -- the plan sets the student limit; 'trial' until the first payment
  plan text not null default 'trial' check (plan in ('trial', 'small', 'medium', 'large')),
  trial_ends_at timestamptz not null default (now() + interval '30 days'),
  -- access is paid up to this moment (null: never paid)
  paid_until timestamptz,
  -- the promo code the teacher used (one per teacher)
  promo_code text,
  -- the admin's note, e.g. "paid 8 990 ₸ by Kaspi on 3 Dec"
  note text not null default '' check (char_length(note) <= 500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.subscriptions is 'Trial and paid access of each teacher. Changed only by the server.';

alter table public.subscriptions enable row level security;

create policy "subscriptions: teacher reads own"
  on public.subscriptions for select
  to authenticated
  using ((select auth.uid()) = teacher_id);

revoke all on public.subscriptions from anon, authenticated;
grant select on public.subscriptions to authenticated;

create function public.subscriptions_touch()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger subscriptions_touch
  before update on public.subscriptions
  for each row execute function public.subscriptions_touch();

-- ---------------------------------------------------------------------------
-- Every teacher gets a subscription row (with a 30-day trial) as soon as they
-- become a teacher: at sign-up or when choosing the role on onboarding.
-- ---------------------------------------------------------------------------
create function public.create_teacher_subscription()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.role = 'teacher' then
    insert into public.subscriptions (teacher_id) values (new.id)
    on conflict (teacher_id) do nothing;
  end if;
  return new;
end;
$$;

revoke execute on function public.create_teacher_subscription() from public, anon, authenticated;

create trigger profiles_teacher_subscription
  after insert or update of role on public.profiles
  for each row execute function public.create_teacher_subscription();

-- Teachers who signed up before today: the trial starts now.
insert into public.subscriptions (teacher_id)
select id from public.profiles where role = 'teacher'
on conflict (teacher_id) do nothing;

-- ---------------------------------------------------------------------------
-- Promo codes: extra free days, once per teacher
-- ---------------------------------------------------------------------------
create table public.promo_codes (
  code text primary key check (code ~ '^[A-Z0-9-]{3,32}$'),
  extra_days integer not null check (extra_days between 1 and 365),
  -- null: no limit
  max_uses integer check (max_uses is null or max_uses > 0),
  uses integer not null default 0 check (uses >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

comment on table public.promo_codes is 'Promo codes for extra free days. Server only: no policies.';

alter table public.promo_codes enable row level security;
revoke all on public.promo_codes from anon, authenticated;

-- Redeems a code for a teacher, atomically. Adds the days to the paid period
-- if the teacher has one, otherwise to the trial (counting from today if the
-- trial is already over). Called only by the server (secret key).
create function public.redeem_promo_code(p_teacher uuid, p_code text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_code public.promo_codes;
  v_sub public.subscriptions;
begin
  select * into v_sub from public.subscriptions where teacher_id = p_teacher for update;
  if not found then
    return 'not_teacher';
  end if;
  if v_sub.promo_code is not null then
    return 'already_used';
  end if;

  select * into v_code from public.promo_codes where code = upper(trim(p_code)) for update;
  if not found or not v_code.active then
    return 'invalid';
  end if;
  if v_code.max_uses is not null and v_code.uses >= v_code.max_uses then
    return 'used_up';
  end if;

  if v_sub.paid_until is not null and v_sub.paid_until > now() then
    update public.subscriptions
      set paid_until = paid_until + make_interval(days => v_code.extra_days), promo_code = v_code.code
      where teacher_id = p_teacher;
  else
    update public.subscriptions
      set trial_ends_at = greatest(trial_ends_at, now()) + make_interval(days => v_code.extra_days),
          promo_code = v_code.code
      where teacher_id = p_teacher;
  end if;

  update public.promo_codes set uses = uses + 1 where code = v_code.code;
  return 'ok';
end;
$$;

revoke execute on function public.redeem_promo_code(uuid, text) from public, anon, authenticated;
grant execute on function public.redeem_promo_code(uuid, text) to service_role;
