"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";
import { BookGrid } from "@/components/books/book-grid";
import { Button } from "@/components/ui/button";
import { books as allBooks } from "@/lib/data/books";

type ViewState = "success" | "empty" | "error" | "loading";

export default function BooksPage() {
  const [viewState, setViewState] = useState<ViewState>("success");

  const displayedBooks =
    viewState === "success" ? allBooks : viewState === "empty" ? [] : [];

  return (
    <main className="py-12">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Books"
              description="Browse our collection with polished empty and error states."
            />

            <div className="flex flex-wrap gap-2">
              <Button
                variant={viewState === "success" ? "default" : "outline"}
                onClick={() => setViewState("success")}
              >
                Success
              </Button>
              <Button
                variant={viewState === "loading" ? "default" : "outline"}
                onClick={() => setViewState("loading")}
              >
                Loading
              </Button>
              <Button
                variant={viewState === "empty" ? "default" : "outline"}
                onClick={() => setViewState("empty")}
              >
                Empty
              </Button>
              <Button
                variant={viewState === "error" ? "default" : "outline"}
                onClick={() => setViewState("error")}
              >
                Error
              </Button>
            </div>
          </div>

          <BookGrid
            books={displayedBooks}
            isLoading={viewState === "loading"}
            isError={viewState === "error"}
            onRetry={() => setViewState("success")}
            emptyTitle="No books available"
            emptyDescription="There are currently no books in this section. Check back later."
          />
        </div>
      </Container>
    </main>
  );
}
