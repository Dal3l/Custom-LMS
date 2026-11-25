import { q, OLD, NEW } from "./lib.mjs";
const tables = [["auth", "users"], ["auth", "identities"]];
for (const r of await q(OLD, `select n.nspname s, c.relname t from pg_class c join pg_namespace n on n.oid=c.relnamespace where c.relkind='r' and n.nspname in ('public','private') order by 1,2`)) tables.push([r.s, r.t]);
let bad = 0;
for (const [s, t] of tables) {
  const cols = (await q(NEW, `select column_name c from information_schema.columns where table_schema='${s}' and table_name='${t}' and is_generated='NEVER' order by ordinal_position`)).map((r) => `"${r.c}"`).join(", ");
  const sql = `select md5(coalesce(string_agg(x::text, '|' order by x::text), '')) h from (select row(${cols}) x from ${s}."${t}") z`;
  const [a] = await q(OLD, sql), [b] = await q(NEW, sql);
  if (a.h !== b.h) { bad++; console.log("DIFF", s, t); }
}
console.log("tables checked", tables.length, "different", bad);
console.log("sequences old:", JSON.stringify(await q(OLD, "select schemaname, sequencename, last_value from pg_sequences where schemaname in ('public','private')")));
