import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


const isPublicRoute = createRouteMatcher(["/", "/api/webhook/clerk"])
const isIgnoredRoute = createRouteMatcher(["/api/webhook/clerk"])

export default clerkMiddleware((auth, req: NextRequest) => {
    const { userId, sessionClaims, redirectToSignIn } = auth();

    // If the user is logged in and the route is protected, let them view.
    if (userId && !isPublicRoute(req)) return NextResponse.next();
    if (!userId && isIgnoredRoute(req)) return NextResponse.next();
  }
);

export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};