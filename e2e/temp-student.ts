import { createClient } from "@supabase/supabase-js";

// A student account just for one test. Browser tests run side by side, and a
// shared student would be pulled into other tests' lessons (lessons open for
// students by themselves). Deleted again with removeTempStudents().

const admin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!, { auth: { persistSession: false } });

const created: string[] = [];

export async function createTempStudent(tag: string, fullName = "Тестовый Ученик") {
  const email = `e2e-tmp-${tag}-${crypto.randomUUID().slice(0, 8)}@linguaroom.test`.toLowerCase();
  const password = "temp-pass-1234";
  const { data, error } = await admin().auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { role: "student", full_name: fullName },
  });
  if (error || !data.user) throw new Error(`could not create a test student: ${error?.message}`);
  created.push(data.user.id);
  return { id: data.user.id, email, password };
}

export async function removeTempStudents() {
  const db = admin();
  while (created.length) await db.auth.admin.deleteUser(created.pop()!);
}
