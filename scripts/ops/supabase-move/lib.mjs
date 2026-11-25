export const OLD = "osbcxscnvoejxpxjaldu", NEW = "fqqwmeznlkdatinpmyne";
export async function q(ref, sql) {
  for (let i = 0; ; i++) {
    const r = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, { method: "POST", headers: { Authorization: "Bearer x", "Content-Type": "application/json" }, body: JSON.stringify({ query: sql }) });
    const t = await r.text();
    if (r.ok) return JSON.parse(t);
    if ((r.status === 429 || r.status >= 500) && i < 4) { await new Promise((s) => setTimeout(s, 2000 * (i + 1))); continue; }
    throw new Error(r.status + " " + t.slice(0, 800));
  }
}
