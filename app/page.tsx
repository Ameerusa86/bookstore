import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";

export default async function HomePage() {
  const books = await prisma.book.findMany();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Books</h1>

      {books.length === 0 ? (
        <p className="text-muted-foreground">No books found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Card key={book.id}>
              <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <p className="font-medium">${book.price.toString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
