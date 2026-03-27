// types/next-auth.d.ts
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "ADMIN" | "CUSTOMER";
    } & DefaultSession["user"];
  }

  interface User {
    role: "ADMIN" | "CUSTOMER";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "CUSTOMER";
  }
}
