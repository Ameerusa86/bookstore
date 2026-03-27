"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type LoginState = {
  success?: boolean;
  error?: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required.",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            error: "Invalid email or password.",
          };
        default:
          return {
            success: false,
            error: "Something went wrong. Please try again.",
          };
      }
    }

    throw error;
  }
}
