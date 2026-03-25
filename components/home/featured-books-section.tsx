import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { featuredBooks } from "@/lib/data/home";

export function FeaturedBooksSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <Badge className="mb-3">Featured Collection</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured Books
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore hand-picked books across programming, design, business,
              and personal growth.
            </p>
          </div>

          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/books">View All Books</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book, index) => (
            <Card
              key={book.id}
              className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardContent className="space-y-4 p-5">
                <div className="space-y-2">
                  <Badge variant="secondary">{book.category}</Badge>

                  <h3 className="line-clamp-1 text-lg font-semibold">
                    {book.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    by {book.author}
                  </p>

                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {book.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ${book.price.toFixed(2)}
                  </span>

                  <Button asChild size="sm">
                    <Link href={`/books/${book.slug}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/books">View All Books</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
