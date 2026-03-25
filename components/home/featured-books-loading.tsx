import { SectionHeaderSkeleton } from "@/components/skeletons/section-header-skeleton";
import { BooksGridSkeleton } from "@/components/skeletons/books-grid-skeleton";

export function FeaturedBooksLoading() {
  return (
    <section className="py-14">
      <SectionHeaderSkeleton />
      <BooksGridSkeleton count={4} />
    </section>
  );
}
