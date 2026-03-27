import { requireAdmin } from "@/lib/auth-guard";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return <div className="container mx-auto px-4 py-10">{children}</div>;
}
