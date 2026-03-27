import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          <span className="rounded-lg border border-border/70 bg-card p-1.5 text-primary shadow-sm transition-transform duration-300 group-hover:rotate-6">
            <BookOpenText className="h-4 w-4" />
          </span>
          <span className="font-heading">BookStore</span>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2">
          <Button asChild variant="ghost">
            <Link href="/books">Books</Link>
          </Button>

          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/categories">Categories</Link>
          </Button>

          {session?.user?.role === "ADMIN" && (
            <Button asChild variant="ghost">
              <Link href="/admin">Admin</Link>
            </Button>
          )}

          {session?.user ? (
            <>
              <Button
                asChild
                variant="outline"
                className="hidden sm:inline-flex"
              >
                <Link href="/account">Account</Link>
              </Button>
              <Button asChild variant="ghost" className="sm:hidden">
                <Link href="/account">Me</Link>
              </Button>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button
                  type="submit"
                  variant="destructive"
                  className="hidden sm:inline-flex"
                >
                  Logout
                </Button>
                <Button type="submit" variant="outline" className="sm:hidden">
                  Exit
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="shadow-sm">
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
