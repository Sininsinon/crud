export function middleware(req) {
    console.log(`Request to: ${req.nextUrl.pathname}`);
  }
  