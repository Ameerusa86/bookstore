"use client";

import { BookCard, Book } from "@/components/books/book-card";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { BookOpen, SearchX } from "lucide-react";

type BookGridProps = {
  books: Book[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  emptyTitle?: string;
  emptyDescription?: string;
  mode?: "default" | "search";
};

export function BookGrid({
  books,
  isLoading = false,
  isError = false,
  onRetry,
  emptyTitle = "No books found",
  emptyDescription = "There are no books to display right now.",
  mode = "default",
}: BookGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-border/70 bg-card/80"
          >
            <div className="aspect-3/4 animate-pulse bg-muted/60" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-20 animate-pulse rounded bg-muted" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-10 w-full animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load books"
        description="We couldn't fetch the books right now. Please try again."
        onRetry={onRetry}
      />
    );
  }

  if (!books.length) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        icon={
          mode === "search" ? (
            <SearchX className="h-10 w-10" />
          ) : (
            <BookOpen className="h-10 w-10" />
          )
        }
        actionLabel="Browse Categories"
        actionHref="/categories"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
