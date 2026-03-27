import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  inStock?: boolean;
};

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group overflow-hidden rounded-3xl border-border/70 bg-card/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="bg-secondary/70">
            {book.category}
          </Badge>
          <span className="text-sm font-semibold text-primary">
            ${book.price.toFixed(2)}
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground">by {book.author}</p>
        </div>

        <p
          className={`text-sm font-medium ${
            book.inStock === false ? "text-destructive" : "text-green-600"
          }`}
        >
          {book.inStock === false ? "Out of stock" : "In stock"}
        </p>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent px-5 pb-5 pt-2">
        <Button asChild className="w-full shadow-sm">
          <Link href={`/books/${book.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
