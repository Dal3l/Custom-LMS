# Moving the Supabase project to another region

Used on 25.11.2026 to move the project from Seoul (`osbcxscnvoejxpxjaldu`,
ap-northeast-2) to Frankfurt (`fqqwmeznlkdatinpmyne`, eu-central-1).

The scripts call the Supabase Management API. They send `Authorization: Bearer x`:
in the cloud environment the network proxy replaces it with the real access token
saved in the environment's network secrets (never put a token in these files).
Project refs are in `lib.mjs`.

Run from the repository root, in this order:

1. `node scripts/ops/supabase-move/apply.mjs` — applies `supabase/migrations/*.sql` to the new project.
2. `node scripts/ops/supabase-move/authcopy.mjs` — copies Auth settings (site URL, redirect URLs, Google sign-in, auto-confirm).
3. `node scripts/ops/supabase-move/copyfiles.mjs` — copies Storage files that are not there yet (safe to run again).
4. `node scripts/ops/supabase-move/migrate.mjs` — empties the new tables and copies all rows (auth.users, auth.identities, public, private).
5. `node scripts/ops/supabase-move/verify.mjs` — compares every table, row by row.

Then: new keys in Vercel (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`,
`SUPABASE_SECRET_KEY`) and in `.env.local`; `regions` in `vercel.json`; the Google OAuth
client needs the new callback `https://<ref>.supabase.co/auth/v1/callback`.
