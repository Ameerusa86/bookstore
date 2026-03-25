import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeaderSkeleton } from "@/components/skeletons/section-header-skeleton";
import { BooksGridSkeleton } from "@/components/skeletons/books-grid-skeleton";

export default function Loading() {
  return (
    <div className="pb-16">
      <section className="border-b bg-muted/30">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Skeleton className="h-6 w-32 rounded-full" />
              <div className="space-y-3">
                <Skeleton className="h-12 w-full max-w-xl" />
                <Skeleton className="h-12 w-4/5 max-w-lg" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full max-w-2xl" />
                <Skeleton className="h-4 w-5/6 max-w-xl" />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Skeleton className="h-10 w-36 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="aspect-[3/4] w-full rounded-xl" />
              <Skeleton className="aspect-[3/4] w-full rounded-xl" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeaderSkeleton />
          <BooksGridSkeleton count={4} />
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeaderSkeleton />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-28 rounded-full" />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
