import { prisma } from "@/lib/prisma";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";
import { BookGrid } from "@/components/books/book-grid";
export default async function BooksPage() {
  const books = await prisma.book.findMany({
    where: { isPublished: true },
    include: { category: true },
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
  });

  const mappedBooks = books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    price: Number(book.price),
    category: book.category?.name ?? "General",
    image:
      book.imageUrl ??
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900&auto=format&fit=crop",
    inStock: book.stock > 0,
  }));

  return (
    <main className="animate-gentle-fade py-10 md:py-14">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            title="Book Catalog"
            description="Explore a refined selection of titles curated for builders, creators, and modern readers."
          />

          <BookGrid
            books={mappedBooks}
            emptyTitle="No books available"
            emptyDescription="Our catalog is being prepared. Please check again shortly."
          />
        </div>
      </Container>
    </main>
  );
}
