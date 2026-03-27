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
    <footer className="relative mt-20 border-t border-border/70 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            BookStore
          </Link>

          <p className="max-w-xs text-sm text-muted-foreground">
            A curated digital bookstore for serious readers, lifelong learners,
            and professionals building better libraries.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Read. Reflect. Rise.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Explore
          </h3>

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
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Categories
          </h3>

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
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Newsletter
          </h3>

          <p className="text-sm text-muted-foreground">
            Get monthly editorial picks, practical reading lists, and selected
            releases.
          </p>

          <p className="text-sm text-muted-foreground">hello@bookstore.dev</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 BookStore. All rights reserved.</p>
          <p>Crafted with Next.js, TypeScript, Prisma, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
