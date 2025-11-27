import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Faqat root "/" uchun redirect
  if (url.pathname === "/") {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Matcher: faqat "/" path tekshirish
export const config = {
  matcher: ["/"],
};
