// New Supabase projects get fewer automatic grants than old ones. Copies the
// old project's exact grants (tables, columns, functions, sequences, default
// privileges) that are missing in the new project.
import { q, OLD, NEW } from "./lib.mjs";
const S = "('public','private')";
const sets = {
  table: `select format('grant %s on table %I.%I to %I', privilege_type, table_schema, table_name, grantee) g from information_schema.role_table_grants where table_schema in ${S}`,
  column: `select format('grant %s (%I) on table %I.%I to %I', privilege_type, column_name, table_schema, table_name, grantee) g from information_schema.column_privileges where table_schema in ${S} and grantee <> 'postgres'`,
  routine: `select format('grant execute on function %I.%I(%s) to %s', n.nspname, p.proname, pg_get_function_identity_arguments(p.oid), case when a.grantee = 0 then 'public' else quote_ident(r.rolname) end) g from pg_proc p join pg_namespace n on n.oid = p.pronamespace cross join lateral aclexplode(coalesce(p.proacl, acldefault('f', p.proowner))) a left join pg_roles r on r.oid = a.grantee where n.nspname in ${S}`,
  sequence: `select format('grant %s on sequence %I.%I to %I', a.privilege_type, n.nspname, c.relname, r.rolname) g from pg_class c join pg_namespace n on n.oid=c.relnamespace cross join lateral aclexplode(c.relacl) a join pg_roles r on r.oid=a.grantee where c.relkind='S' and n.nspname in ${S}`,
  defaults: `select format('alter default privileges for role %I in schema %I grant %s on %s to %s', pg_get_userbyid(d.defaclrole), n.nspname, a.privilege_type, case d.defaclobjtype when 'r' then 'tables' when 'S' then 'sequences' when 'f' then 'functions' when 'T' then 'types' end, case when a.grantee = 0 then 'public' else quote_ident(pg_get_userbyid(a.grantee)) end) g from pg_default_acl d join pg_namespace n on n.oid = d.defaclnamespace cross join lateral aclexplode(d.defaclacl) a where n.nspname in ${S}`,
};
const revokes = [];
for (const [k, sql] of Object.entries(sets)) {
  const a = new Set((await q(OLD, sql)).map((r) => r.g)), b = new Set((await q(NEW, sql)).map((r) => r.g));
  const missing = [...a].filter((g) => !b.has(g)), extra = [...b].filter((g) => !a.has(g));
  console.log(k, "missing in new:", missing.length, "extra in new:", extra.length);
  if (extra.length) console.log("  extra:", extra.slice(0, 10));
  if (process.argv[2] === "--apply" && missing.length) await q(NEW, missing.join(";\n") + ";");
  if (k !== "defaults") revokes.push(...extra);
}
