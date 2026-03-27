"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

type RegisterState = {
  success: boolean;
  error?: string;
};

export async function registerUserAction(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  try {
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim().toLowerCase() || "";
    const password = formData.get("password")?.toString().trim() || "";

    if (!name || !email || !password) {
      return {
        success: false,
        error: "All fields are required.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: "Password must be at least 6 characters long.",
      };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "An account with this email already exists.",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Register error:", error);

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
