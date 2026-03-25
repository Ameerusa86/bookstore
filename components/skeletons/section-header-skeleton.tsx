import { Skeleton } from "@/components/ui/skeleton";

export function SectionHeaderSkeleton() {
  return (
    <div className="mb-6 space-y-3">
      <Skeleton className="h-8 w-56" />
      <Skeleton className="h-4 w-80 max-w-full" />
    </div>
  );
}
