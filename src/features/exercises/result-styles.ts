import { cn } from "@/lib/utils";

/** Green / red / neutral styling for a checked part. */
export function verdictClass(verdict: boolean | null | undefined) {
  return cn(
    verdict === true && "border-emerald-500 bg-emerald-50 text-emerald-900 aria-invalid:border-emerald-500",
    verdict === false && "border-destructive bg-destructive/10 text-destructive",
  );
}
