import { BookCardSkeleton } from "@/components/skeletons/book-card-skeleton";

type BooksGridSkeletonProps = {
  count?: number;
};

export function BooksGridSkeleton({ count = 4 }: BooksGridSkeletonProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
}
