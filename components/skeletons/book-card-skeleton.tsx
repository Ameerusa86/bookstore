import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BookCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/60">
      <div className="relative aspect-[3/4] w-full">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>

      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-20 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>

        <Skeleton className="h-4 w-32" />

        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
