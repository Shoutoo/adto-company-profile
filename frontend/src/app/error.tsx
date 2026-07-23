'use client';

import { useEffect } from 'react';

import Link from 'next/link';

import { Home, AlertTriangle, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants/routes.constants';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="bg-background relative flex min-h-dvh items-center justify-center overflow-hidden px-4">
      <div className="bg-grid-black/[0.02] dark:bg-grid-white/[0.02] absolute inset-0" />

      <div className="border-border shadow-brand-glow relative max-w-lg border bg-surface-secondary p-12 text-center">
        <div className="bg-destructive/10 border-destructive/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center border">
          <AlertTriangle className="text-destructive h-6 w-6" strokeWidth={1.5} />
        </div>

        <p className="text-destructive mb-2 font-heading text-7xl font-bold">500</p>
        <h1 className="text-foreground mb-4 font-heading text-xl font-bold uppercase tracking-widest">
          System Failure
        </h1>

        <p className="text-muted-foreground mx-auto mb-8 max-w-sm text-sm leading-relaxed">
          An unexpected error occurred in our infrastructure. We have logged the issue and are
          investigating.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="rounded-none px-6 text-xs font-bold uppercase tracking-widest"
            size="lg"
            variant="default"
            onClick={() => {
              reset();
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reboot Request
          </Button>
          <Button
            asChild
            className="rounded-none px-6 text-xs font-bold uppercase tracking-widest"
            size="lg"
            variant="outline"
          >
            <Link href={ROUTES.HOME}>
              <Home className="mr-2 h-4 w-4" />
              Return Base
            </Link>
          </Button>
        </div>

        {error.digest && (
          <p className="text-muted-foreground/50 mt-8 text-[10px] uppercase tracking-widest">
            Error Ref: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
