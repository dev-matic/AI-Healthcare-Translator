import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Optionally, you can add custom logic here if needed
});

export const config = {
  matcher: [
    /*
    Match all requests except for the ones starting with:
    - _next/static
    - _next/image
    - favicon.ico
    */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
