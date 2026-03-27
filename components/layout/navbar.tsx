import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          BookStore
        </Link>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/books">Books</Link>
          </Button>

          {session?.user?.role === "ADMIN" && (
            <Button asChild variant="ghost">
              <Link href="/admin">Admin</Link>
            </Button>
          )}

          {session?.user ? (
            <>
              <Button asChild variant="outline">
                <Link href="/account">Account</Link>
              </Button>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button type="submit" variant="destructive">
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
