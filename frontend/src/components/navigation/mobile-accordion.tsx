'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type NavItem as NavItemType } from '@/types/navigation.types';
import { useState } from 'react';

interface MobileAccordionProps {
  item: NavItemType;
  onClose: () => void;
}

export function MobileAccordion({ item, onClose }: MobileAccordionProps) {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isParentActive = isActive(item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'flex w-full items-center justify-between py-4 text-[15px] font-medium transition-colors',
          isParentActive ? 'text-brand-600' : 'text-slate-900'
        )}
        onClick={onClose}
      >
        {t(item.label as any)}
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex w-full items-center justify-between py-4 text-[15px] font-medium transition-colors',
          isParentActive || isOpen ? 'text-brand-600' : 'text-slate-900'
        )}
      >
        {t(item.label as any)}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="mb-4 mt-1 space-y-1 rounded-xl bg-slate-50 p-2">
              {item.children.map((child) => {
                const isChildActive = isActive(child.href);
                return (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-[14px] font-medium transition-colors hover:bg-white hover:text-brand-600',
                        isChildActive
                          ? 'bg-white text-brand-600 shadow-sm'
                          : 'text-slate-600'
                      )}
                    >
                      {t(child.label as any)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
