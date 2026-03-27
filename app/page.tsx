import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookGrid } from "@/components/books/book-grid";

export default async function HomePage() {
  const books = await prisma.book.findMany({
    where: { isPublished: true },
    include: { category: true },
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    take: 8,
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
    <main className="animate-gentle-fade py-8 pb-16 md:py-12 md:pb-20">
      <Container>
        <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm md:p-12">
          <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <Badge className="w-fit bg-primary/90 text-primary-foreground">
              <Sparkles className="mr-1 h-3 w-3" />
              Professional Reading Platform
            </Badge>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Build your next breakthrough through better books
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Discover curated titles in technology, business, and personal
              growth. Every shelf is crafted to help you think clearer and move
              faster.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-sm">
                <Link href="/books">
                  Explore Books
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-6 md:mt-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Fresh arrivals
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Handpicked titles with modern design and clean metadata.
            </p>
          </div>

          <BookGrid books={mappedBooks} emptyTitle="No books published yet" />
        </section>
      </Container>
    </main>
  );
}
