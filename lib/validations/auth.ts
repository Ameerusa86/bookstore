import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .transform((value) => value.toLowerCase()),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
