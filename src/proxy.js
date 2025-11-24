import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function proxy(request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/add-blogs", "/manage-blogs"],
};
