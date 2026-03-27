import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="animate-gentle-fade py-10 md:py-14">
      <Container>
        <div className="space-y-8">
          <div className="space-y-3">
            <Badge>My Profile</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Account Center
            </h1>
            <p className="text-muted-foreground">
              Manage your identity and access level in one secure place.
            </p>
          </div>

          <Card className="rounded-3xl border-border/70 bg-card/85 shadow-sm">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm md:grid-cols-2">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {session.user.name ?? "No name"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {session.user.email}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {session.user.role}
              </p>
              <p>
                <span className="font-semibold">User ID:</span>{" "}
                {session.user.id}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
