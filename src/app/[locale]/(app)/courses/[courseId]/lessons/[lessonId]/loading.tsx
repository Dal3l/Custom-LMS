import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6" aria-busy="true">
      <Skeleton className="h-4 w-24" />
      <div className="flex flex-col gap-4 sm:flex-row">
        <Skeleton className="aspect-[16/9] w-full rounded-xl sm:w-56" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-8 w-64 max-w-full" />
          <Skeleton className="h-5 w-32" />
        </div>
      </div>
      {[0, 1].map((i) => (
        <Skeleton key={i} className="h-40 rounded-2xl" />
      ))}
    </div>
  );
}
