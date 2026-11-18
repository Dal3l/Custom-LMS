-- Translations by AI (Gemini): better than the free translation service, and
-- with the sentence the word stands in ("bank" of a river → "берег").
-- 1) Remembered translations say where they came from, so an old answer of the
--    free service can be replaced by the AI's one later.
alter table public.translations add column by_ai boolean not null default false;

-- 2) Translations of a word in one sentence. Only the server reads and writes
--    them (secret key): no policies, nothing granted to users.
create table public.context_translations (
  source_lang text not null check (source_lang ~ '^[a-z]{2,3}$'),
  target_lang text not null check (target_lang ~ '^[a-z]{2,3}$'),
  term text not null check (char_length(term) between 1 and 100),
  -- sha-256 of the sentence (lower case, spaces collapsed)
  context_key text not null check (context_key ~ '^[0-9a-f]{64}$'),
  variants text[] not null check (cardinality(variants) between 1 and 6),
  created_at timestamptz not null default now(),
  primary key (source_lang, target_lang, term, context_key)
);
alter table public.context_translations enable row level security;
revoke all on public.context_translations from anon, authenticated;
