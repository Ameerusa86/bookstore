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
    <Card className="group overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{book.category}</Badge>
          <span className="text-sm font-semibold">
            ${book.price.toFixed(2)}
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="line-clamp-1 text-lg font-semibold">{book.title}</h3>
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

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/books/${book.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
