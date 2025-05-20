import { clerkMiddleware } from "@clerk/nextjs/server";

const errorHandler = (error) => {
  console.error("Middleware error:", error);
};

export default clerkMiddleware({
  async beforeAuth(auth, req) {
    try {
      // You can add custom logic here if needed
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  },
  afterAuth(auth, req) {
    // Optionally add logic after auth
  },
  onError(error) {
    errorHandler(error);
  },
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
