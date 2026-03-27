"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerUserAction } from "@/actions/auth/register-user-action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RegisterState = {
  success: boolean;
  error?: string;
};

const initialState: RegisterState = {
  success: false,
};

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
    <Card className="w-full max-w-md rounded-3xl border-border/70 bg-card/90 shadow-lg shadow-primary/5">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold">Create account</CardTitle>
        <CardDescription>
          Set up your account to manage purchases and saved books.
        </CardDescription>
      </CardHeader>

      <CardContent>
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
              placeholder="********"
              required
            />
          </div>

          {state.error && (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              {state.error}
            </p>
          )}

          {state.success && (
            <p className="rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              Account created successfully. Redirecting to login...
            </p>
          )}

          <Button type="submit" className="w-full shadow-sm" disabled={pending}>
            {pending ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
