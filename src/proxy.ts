import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  const ACCESS = req.cookies.get("ADMIN_ACCESS_PORT");

  const isAuthenticated = !!ACCESS;

  const isAuthRoute =
    pathname.includes("/dashboard/main") ||
    pathname.includes("/dashboard/projects") ||
    pathname.includes("/dashboard/experience") ||
    pathname.includes("/dashboard/skills")

  if (isAuthRoute && !isAuthenticated) {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/") {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
