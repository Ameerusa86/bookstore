// proxy.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAdmin = req.auth?.user?.role === "ADMIN";

  const isAuthPage =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/register");

  const isProtectedRoute =
    nextUrl.pathname.startsWith("/account") ||
    nextUrl.pathname.startsWith("/checkout") ||
    nextUrl.pathname.startsWith("/dashboard") ||
    nextUrl.pathname.startsWith("/admin");

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (nextUrl.pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/account/:path*",
    "/checkout/:path*",
    "/dashboard/:path*",
    "/admin/:path*",
    "/login",
    "/register",
  ],
};
