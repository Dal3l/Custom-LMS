import { OLD, NEW } from "./lib.mjs";
const H = { Authorization: "Bearer x", "Content-Type": "application/json" };
const a = await (await fetch(`https://api.supabase.com/v1/projects/${OLD}/config/auth`, { headers: H })).json();
const keys = ["external_google_enabled", "external_google_client_id", "external_google_secret", "external_google_skip_nonce_check", "mailer_autoconfirm", "site_url", "uri_allow_list"];
const body = Object.fromEntries(keys.map((k) => [k, a[k]]));
const r = await fetch(`https://api.supabase.com/v1/projects/${NEW}/config/auth`, { method: "PATCH", headers: H, body: JSON.stringify(body) });
console.log("patch", r.status);
const b = await (await fetch(`https://api.supabase.com/v1/projects/${NEW}/config/auth`, { headers: H })).json();
console.log("same now:", keys.filter((k) => JSON.stringify(a[k]) === JSON.stringify(b[k])).length, "of", keys.length);
