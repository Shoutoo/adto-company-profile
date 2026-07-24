'use client';

/**
 * Public-facing layout with Header and Footer.
 * Wraps all public pages (Home, About, Services, etc.).
 * @module components/layouts/public-layout
 */

import { usePathname } from '@/i18n/routing';

import { motion, AnimatePresence } from 'framer-motion';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { AuthProvider } from '@/lib/providers/auth-provider';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const pathname = usePathname();

  return (
    <AuthProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </AuthProvider>
  );
}
