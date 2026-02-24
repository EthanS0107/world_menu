import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Paths that require subscription
  const protectedPaths = ['/menu', '/propose'];

  // Check if current path starts with any protected path
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // If path is protected
  if (isProtected) {
    if (!token) {
      // Not logged in -> Redirect to login/home
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Check custom claim for subscription status?
    // Note: token usually contains user info if configured in session callback
    // However, for best security, we might want to check DB or trust the token if updated on login
    // For now, let's assume token has 'isActive' or 'stripeSubscriptionId'
    // But middleware runs on Edge, often can't access Prisma directly.
    // So we rely on token.user.isActive or similar.
    
    // Simplification: If logged in, let them through FOR NOW, 
    // BUT the page itself should perhaps check subscription or redirect if not active.
    // Ideally, we add 'isActive' to the token in auth config.
    
    // Let's assume we want to redirect to pricing/subscribe if not active.
    // return NextResponse.redirect(new URL('/subscribe', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/menu/:path*', '/propose/:path*', '/dashboard/:path*'],
};
