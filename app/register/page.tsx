import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/auth/register-form";

export default async function RegisterPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="container mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Create Account</h1>
      <RegisterForm />
    </div>
  );
}
