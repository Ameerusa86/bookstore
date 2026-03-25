import { Book } from "@/components/books/book-card";

export const books: Book[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    category: "Self Development",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    price: 16.5,
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 28.0,
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
    inStock: false,
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 14.99,
    category: "Fiction",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
];
