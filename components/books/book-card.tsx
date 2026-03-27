import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleCheck, CircleX } from "lucide-react";
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
  const isOutOfStock = book.inStock === false;

  return (
    <Card className="group overflow-hidden rounded-3xl border-border/70 bg-card/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15">
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
          <Badge className="bg-black/55 text-white backdrop-blur-sm">
            {book.category}
          </Badge>

          <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            ${book.price.toFixed(2)}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-white">
            {book.title}
          </h3>
          <p className="mt-1 text-sm text-white/80">by {book.author}</p>
        </div>
      </div>

      <CardContent className="p-5 pb-3">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            isOutOfStock
              ? "bg-destructive/10 text-destructive"
              : "bg-emerald-600/10 text-emerald-700"
          }`}
        >
          {isOutOfStock ? (
            <CircleX className="h-3.5 w-3.5" />
          ) : (
            <CircleCheck className="h-3.5 w-3.5" />
          )}
          <span>
            {isOutOfStock ? "Currently unavailable" : "Ready to ship"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="border-t border-border/60 bg-muted/20 px-5 py-4">
        <Button asChild className="w-full gap-2 shadow-sm" variant="default">
          <Link href={`/books/${book.id}`}>
            View Details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
