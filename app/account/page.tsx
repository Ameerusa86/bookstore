import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">My Account</h1>

      <div className="mt-6 space-y-2 rounded-lg border p-6">
        <p>
          <span className="font-medium">Name:</span>{" "}
          {session.user.name ?? "No name"}
        </p>
        <p>
          <span className="font-medium">Email:</span> {session.user.email}
        </p>
        <p>
          <span className="font-medium">Role:</span> {session.user.role}
        </p>
        <p>
          <span className="font-medium">User ID:</span> {session.user.id}
        </p>
      </div>
    </div>
  );
}
