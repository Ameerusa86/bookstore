"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerUserAction } from "@/actions/auth/register-user-action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type RegisterState = {
  success: boolean;
  error?: string;
};

const initialState: RegisterState = {
  success: false,
};

function SubmitButton() {
  return (
    <Button type="submit" className="w-full">
      Create Account
    </Button>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    registerUserAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push("/login");
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>

      {state.error && (
        <p className="text-sm font-medium text-destructive">{state.error}</p>
      )}

      {state.success && (
        <p className="text-sm font-medium text-green-600">
          Account created successfully. Redirecting to login...
        </p>
      )}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
