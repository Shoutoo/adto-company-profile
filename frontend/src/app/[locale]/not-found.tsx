import { Link } from '@/i18n/routing';

import { Home, ArrowLeft, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants/routes.constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <div className="bg-background relative flex min-h-dvh items-center justify-center overflow-hidden px-4">
      <div className="bg-grid-black/[0.02] dark:bg-grid-white/[0.02] absolute inset-0" />
      <div className="border-border shadow-brand-glow relative max-w-lg border bg-surface-secondary p-12 text-center">
        <div className="bg-background border-border mx-auto mb-8 flex h-16 w-16 items-center justify-center border">
          <Search className="h-6 w-6 text-brand-600" strokeWidth={1.5} />
        </div>
        <p className="mb-2 font-heading text-7xl font-bold text-brand-600">404</p>
        <h1 className="text-foreground mb-4 font-heading text-xl font-bold uppercase tracking-widest">
          System Location Unknown
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-sm text-sm leading-relaxed">
          The requested asset could not be located in our infrastructure. It may have been
          decommissioned or moved.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="rounded-none px-6 text-xs font-bold uppercase tracking-widest"
            size="lg"
            variant="default"
          >
            <Link href={ROUTES.HOME}>
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-none px-6 text-xs font-bold uppercase tracking-widest"
            size="lg"
            variant="outline"
          >
            <Link href={ROUTES.CONTACT}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Support Desk
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
