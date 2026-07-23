'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config/site.config';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { ROUTES } from '@/lib/constants/routes.constants';
import { cn } from '@/lib/utils/cn';
import { useUiStore } from '@/stores/ui.store';

/**
 * Animated mobile navigation menu with staggered item transitions.
 * Renders below the header on mobile viewports.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const { setMobileMenuOpen } = useUiStore();

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 bottom-0 top-20 z-[100] overflow-y-auto lg:hidden"
      style={{ backgroundColor: '#ffffff', boxShadow: '0 20px 60px rgba(0,0,0,.08)' }}
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <nav aria-label="Mobile navigation" className="container-page flex min-h-full flex-col py-6 pb-24 bg-white">
        <ul className="space-y-1 flex-1">
          {PUBLIC_NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.href}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -12 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                className={cn(
                  'border-border flex items-center justify-between border-b px-0 py-4 text-sm font-semibold uppercase tracking-wider transition-colors',
                  isActive(item.href) ? 'text-brand-600' : 'text-foreground hover:text-brand-600'
                )}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
                <ArrowRight className="text-muted-foreground h-4 w-4" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-4 space-y-3 border-t pt-4">
          <Button asChild className="w-full" variant="brand">
            <Link href={ROUTES.CONTACT} onClick={closeMenu}>
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <p className="text-muted-foreground text-center text-xs">{siteConfig.contact.phone}</p>
        </div>
      </nav>
    </motion.div>
  );
}
