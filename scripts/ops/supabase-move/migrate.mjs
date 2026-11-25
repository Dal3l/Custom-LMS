import { q, OLD, NEW } from "./lib.mjs";
const tables = [["auth", "users"], ["auth", "identities"]];
for (const r of await q(OLD, `select n.nspname s, c.relname t from pg_class c join pg_namespace n on n.oid=c.relnamespace where c.relkind='r' and n.nspname in ('public','private') order by 1,2`)) tables.push([r.s, r.t]);
const id = (s, t) => `${s}."${t}"`;
// 1) empty the new tables
await q(NEW, `begin; set local session_replication_role = replica; truncate ${tables.map(([s, t]) => id(s, t)).join(", ")} cascade; commit;`);
console.log("truncated", tables.length);
const TAG = "$mig7q$";
for (const [s, t] of tables) {
  const cols = (await q(NEW, `select column_name c from information_schema.columns where table_schema='${s}' and table_name='${t}' and is_generated='NEVER' order by ordinal_position`)).map((r) => `"${r.c}"`);
  const list = cols.join(", ");
  const [{ n }] = await q(OLD, `select count(*)::int n from ${id(s, t)}`);
  let off = 0, chunk = 400;
  while (off < n) {
    const rows = await q(OLD, `select coalesce(json_agg(x), '[]'::json) j from (select ${list} from ${id(s, t)} order by ctid limit ${chunk} offset ${off}) x`);
    const json = JSON.stringify(rows[0].j);
    if (json.includes(TAG)) throw new Error("tag in data " + t);
    await q(NEW, `begin; set local session_replication_role = replica; insert into ${id(s, t)} (${list}) select ${list} from json_populate_recordset(null::${id(s, t)}, ${TAG}${json}${TAG}::json); commit;`);
    off += chunk;
  }
  const [{ m }] = await q(NEW, `select count(*)::int m from ${id(s, t)}`);
  console.log(`${s}.${t}: ${n} → ${m}${n === m ? "" : "  ❌"}`);
}
