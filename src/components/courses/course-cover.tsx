import Image from "next/image";
import { coverUrl } from "@/features/courses/cover-url";
import { cn } from "@/lib/utils";

// Soft colours for courses without a cover, picked from the language code.
const TINTS = [
  "from-indigo-100 to-indigo-200 text-indigo-700",
  "from-emerald-100 to-emerald-200 text-emerald-700",
  "from-amber-100 to-amber-200 text-amber-700",
  "from-rose-100 to-rose-200 text-rose-700",
  "from-sky-100 to-sky-200 text-sky-700",
  "from-violet-100 to-violet-200 text-violet-700",
];

function tintFor(code: string) {
  let sum = 0;
  for (const ch of code) sum += ch.charCodeAt(0);
  return TINTS[sum % TINTS.length];
}

export function CourseCover({
  path,
  language,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority,
}: {
  path: string | null;
  language: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const url = coverUrl(path);
  return (
    <div className={cn("relative aspect-[16/9] overflow-hidden rounded-xl", className)}>
      {url ? (
        <Image src={url} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          className={cn(
            "flex size-full items-center justify-center bg-gradient-to-br text-3xl font-bold uppercase",
            tintFor(language),
          )}
          aria-hidden="true"
        >
          {language}
        </div>
      )}
    </div>
  );
}
