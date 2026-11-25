import { readdirSync, readFileSync } from "node:fs";
import { NEW } from "./lib.mjs";
const ref = NEW;
async function q(sql) {
  const r = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, { method: "POST", headers: { Authorization: "Bearer x", "Content-Type": "application/json" }, body: JSON.stringify({ query: sql }) });
  const t = await r.text(); if (!r.ok) throw new Error(r.status + " " + t); return JSON.parse(t);
}
await q(`create schema if not exists supabase_migrations; create table if not exists supabase_migrations.schema_migrations (version text primary key, statements text[], name text);`);
const done = new Set((await q("select version from supabase_migrations.schema_migrations")).map((r) => r.version));
for (const f of readdirSync("supabase/migrations").sort()) {
  const [version, ...rest] = f.replace(/\.sql$/, "").split("_"); const name = rest.join("_");
  if (done.has(version)) { console.log("skip", f); continue; }
  const sql = readFileSync("supabase/migrations/" + f, "utf8");
  try { await q(sql); } catch (e) { console.log("FAIL", f, String(e).slice(0, 600)); process.exit(1); }
  await q(`insert into supabase_migrations.schema_migrations(version, name, statements) values ('${version}', '${name}', array[]::text[])`);
  console.log("ok", f);
}
