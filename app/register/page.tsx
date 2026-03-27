import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/auth/register-form";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export default async function RegisterPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="animate-gentle-fade py-10 md:py-14">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm md:p-10">
            <Badge className="mb-4">Create Account</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Start your premium reading workspace
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Save favorites, manage purchases, and personalize your bookstore
              experience with one account.
            </p>
          </section>

          <div className="lg:justify-self-end">
            <RegisterForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
