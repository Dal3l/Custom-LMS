-- Stage 3.4: in-app notifications (the bell in the top bar).
-- Created only by the database itself (triggers below), so nobody can send a
-- notification to someone else. Each user reads and marks read only their own.
--   student: a new homework, a teacher's comment, homework reviewed
--   teacher: a student handed homework in

create type public.notification_kind as enum (
  'homework_assigned',
  'homework_comment',
  'homework_reviewed',
  'homework_submitted'
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  -- who gets it
  user_id uuid not null references public.profiles (id) on delete cascade,
  kind public.notification_kind not null,
  homework_id uuid not null references public.homeworks (id) on delete cascade,
  -- the student it is about (the recipient themselves for student notifications)
  student_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  read_at timestamptz
);
create index notifications_user_idx on public.notifications (user_id, created_at desc);
create index notifications_homework_idx on public.notifications (homework_id);
create index notifications_student_idx on public.notifications (student_id);

alter table public.notifications enable row level security;

create policy "notifications: own only" on public.notifications
  for select to authenticated using (user_id = (select auth.uid()));
create policy "notifications: mark own as read" on public.notifications
  for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "notifications: remove own" on public.notifications
  for delete to authenticated using (user_id = (select auth.uid()));

revoke all on public.notifications from anon, authenticated;
grant select, delete on public.notifications to authenticated;
grant update (read_at) on public.notifications to authenticated;

-- ---------------------------------------------------------------------------
-- Creating notifications
-- ---------------------------------------------------------------------------
-- One unread notification per (recipient, kind, homework, student): a repeat
-- (e.g. the teacher comments on several exercises) just moves it to the top.
create function private.notify(p_user uuid, p_kind public.notification_kind, p_homework uuid, p_student uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_user is null then
    return;
  end if;
  update public.notifications
    set created_at = now()
    where user_id = p_user and kind = p_kind and homework_id = p_homework
      and student_id = p_student and read_at is null;
  if not found then
    insert into public.notifications (user_id, kind, homework_id, student_id)
    values (p_user, p_kind, p_homework, p_student);
  end if;
  -- Keep each user's list small: forget read notifications older than 60 days.
  delete from public.notifications
    where user_id = p_user and read_at is not null and created_at < now() - interval '60 days';
end;
$$;

create function private.on_homework_student()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_teacher uuid;
begin
  if tg_op = 'INSERT' then
    perform private.notify(new.student_id, 'homework_assigned', new.homework_id, new.student_id);
    return new;
  end if;
  if old.submitted_at is null and new.submitted_at is not null then
    select c.teacher_id into v_teacher
      from public.homeworks h join public.classes c on c.id = h.class_id
      where h.id = new.homework_id;
    perform private.notify(v_teacher, 'homework_submitted', new.homework_id, new.student_id);
  end if;
  if old.reviewed_at is null and new.reviewed_at is not null then
    perform private.notify(new.student_id, 'homework_reviewed', new.homework_id, new.student_id);
  end if;
  return new;
end;
$$;

create trigger homework_students_notify
  after insert or update of submitted_at, reviewed_at on public.homework_students
  for each row execute function private.on_homework_student();

create function private.on_homework_comment()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform private.notify(new.student_id, 'homework_comment', new.homework_id, new.student_id);
  return new;
end;
$$;

create trigger homework_comments_notify
  after insert or update of body on public.homework_comments
  for each row execute function private.on_homework_comment();

revoke execute on function private.notify(uuid, public.notification_kind, uuid, uuid),
  private.on_homework_student(), private.on_homework_comment() from public, anon, authenticated;

-- The bell updates live.
alter publication supabase_realtime add table public.notifications;
