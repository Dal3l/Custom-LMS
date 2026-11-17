-- Stage 4.2: remembered translations of words selected in lessons.
-- Filled only by the server (secret key) from the translation service, so each
-- word is asked for once; everyone signed in may read it (no personal data).

create table public.translations (
  source_lang text not null check (source_lang ~ '^[a-z]{2,3}$'),
  target_lang text not null check (target_lang ~ '^[a-z]{2,3}$'),
  -- the word or phrase, lower case, spaces collapsed
  term text not null check (char_length(term) between 1 and 100),
  -- translation variants, best first
  variants text[] not null check (cardinality(variants) between 1 and 6),
  created_at timestamptz not null default now(),
  primary key (source_lang, target_lang, term)
);

alter table public.translations enable row level security;

create policy "translations: signed-in users read" on public.translations
  for select to authenticated using (true);
-- No insert / update / delete policies: only the server writes, after asking the service.

revoke all on public.translations from anon, authenticated;
grant select on public.translations to authenticated;
