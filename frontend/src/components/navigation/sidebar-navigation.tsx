'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types/navigation.types';
import { useNavigation } from './navigation-provider';

interface SidebarNavigationProps {
  parentItem: NavItem;
}

export function SidebarNavigation({ parentItem }: SidebarNavigationProps) {
  const t = useTranslations('Navbar');
  const { activeSubItem, setActiveSubItem, closeNav } = useNavigation();

  if (!parentItem.children) return null;

  return (
    <div className="w-[400px] shrink-0 bg-white px-8 py-10">
      <h3 className="mb-6 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
        {t(parentItem.label as any)}
      </h3>
      <ul className="flex flex-col space-y-2">
        {parentItem.children.map((child) => {
          const isActive = activeSubItem === child.label;
          return (
            <li key={child.href}>
              <Link
                href={child.href}
                onMouseEnter={() => setActiveSubItem(child.label)}
                onClick={closeNav}
                className={cn(
                  'group flex items-center justify-between rounded-[4px] px-4 py-4 text-[15px] font-medium transition-all duration-200',
                  isActive
                    ? 'bg-brand-50/50 text-brand-700 shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                )}
              >
                {t(child.label as any)}
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isActive 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
