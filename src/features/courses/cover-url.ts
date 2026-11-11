/** Public URL of a course cover stored in the "course-covers" bucket. */
export function coverUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base}/storage/v1/object/public/course-covers/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}
