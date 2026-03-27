import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="container mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
}
