import { requireAdmin } from "@/lib/auth-guard";

export default async function AdminPage() {
  const session = await requireAdmin();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session.user.name || session.user.email}
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">Admin Access Confirmed</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Only users with the ADMIN role can view this page.
        </p>
      </div>
    </div>
  );
}
