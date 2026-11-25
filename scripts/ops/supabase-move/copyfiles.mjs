import { q, OLD, NEW } from "./lib.mjs";
const H = { Authorization: "Bearer x" };
async function secret(ref) {
  const keys = await (await fetch(`https://api.supabase.com/v1/projects/${ref}/api-keys?reveal=true`, { headers: H })).json();
  const k = keys.find((x) => x.type === "secret") ?? keys.find((x) => x.name === "service_role");
  return k.api_key;
}
const sOld = await secret(OLD), sNew = await secret(NEW);
const objs = await q(OLD, "select bucket_id b, name n, metadata->>'mimetype' m from storage.objects order by 1,2");
const have = new Set((await q(NEW, "select bucket_id||'/'||name k from storage.objects")).map((r) => r.k));
const todo = objs.filter((o) => !have.has(o.b + "/" + o.n));
console.log("total", objs.length, "to copy", todo.length);
const enc = (p) => p.split("/").map(encodeURIComponent).join("/");
let done = 0, failed = [];
async function one(o) {
  for (let i = 0; i < 3; i++) {
    try {
      const g = await fetch(`https://${OLD}.supabase.co/storage/v1/object/${o.b}/${enc(o.n)}`, { headers: { apikey: sOld, Authorization: `Bearer ${sOld}` } });
      if (!g.ok) throw new Error("get " + g.status);
      const buf = Buffer.from(await g.arrayBuffer());
      const p = await fetch(`https://${NEW}.supabase.co/storage/v1/object/${o.b}/${enc(o.n)}`, { method: "POST", headers: { apikey: sNew, Authorization: `Bearer ${sNew}`, "Content-Type": o.m || "application/octet-stream", "x-upsert": "true" }, body: buf });
      if (!p.ok) throw new Error("put " + p.status + " " + (await p.text()).slice(0, 100));
      return;
    } catch (e) { if (i === 2) failed.push(o.b + "/" + o.n + " " + e.message); }
  }
}
const queue = [...todo];
await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) { await one(queue.shift()); if (++done % 100 === 0) console.log("copied", done); } }));
console.log("done", done, "failed", failed.length, failed.slice(0, 5));
