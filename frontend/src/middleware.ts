import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

/**
 * Next.js Edge Middleware.
 * - Handles i18n routing
 * - Applies enterprise security headers to all responses
 * - Redirects /admin to /login if not authenticated
 */
export function middleware(request: NextRequest): NextResponse {
  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('adto-auth-storage');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 1. Run next-intl middleware
  const response = intlMiddleware(request);

  // 2. Add Content Security Policy
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `font-src 'self' https://fonts.gstatic.com data:`,
    `img-src 'self' data: blob: https:`,
    `media-src 'self' blob: https:`,
    `connect-src 'self' https://www.google-analytics.com https://analytics.google.com ${process.env.NEXT_PUBLIC_API_URL ?? ''}`,
    `frame-src 'none'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  // Security Headers
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

export const config = {
  // Match only internationalized pathnames.
  // CRITICAL: Explicitly exclude /images and /logos to prevent 404s!
  matcher: ['/', '/(id|en)/:path*', '/((?!_next/static|_next/image|images/|logos/|favicon.ico|icons/|screenshots/|browserconfig.xml|site.webmanifest|robots.txt|logo.svg|logo-white.svg|logo-color.svg|logo-icon.svg|admin|api).*)']
};
