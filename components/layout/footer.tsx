import Link from "next/link";

const shopLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Categories", href: "/categories" },
  { name: "Contact", href: "/contact" },
];

const categoryLinks = [
  { name: "Fiction", href: "/categories/fiction" },
  { name: "Business", href: "/categories/business" },
  { name: "Technology", href: "/categories/technology" },
  { name: "Self Development", href: "/categories/self-development" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            BookStore
          </Link>

          <p className="max-w-xs text-sm text-muted-foreground">
            Your modern online bookstore for discovering great books across
            fiction, business, technology, and more.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Quick Links</h3>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {shopLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Categories</h3>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {categoryLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Newsletter</h3>

          <p className="text-sm text-muted-foreground">
            Stay updated with new arrivals, featured books, and exclusive
            offers.
          </p>

          <p className="text-sm text-muted-foreground">
            Email signup functionality will be added later in the course.
          </p>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 BookStore. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}
