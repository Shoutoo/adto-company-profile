'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Check, ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'id', name: 'ID', fullName: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'EN', fullName: 'English', flag: '🇺🇸' }
];

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLocaleObj = LOCALES.find(l => l.code === locale) || LOCALES[0];
  if (!currentLocaleObj) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className={cn(
          "language-switcher-container group flex items-center gap-1.5 rounded-full border p-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF5A00]/20",
          isScrolled 
            ? "border-slate-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 hover:shadow-sm data-[state=open]:bg-slate-50" 
            : "border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 data-[state=open]:bg-white/20"
        )}
      >
        <Globe className={cn("h-4 w-4 transition-colors", isScrolled ? "text-slate-600 group-hover:text-[#FF5A00]" : "text-white group-hover:text-white/80")} />
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180", isScrolled ? "text-slate-400 group-hover:text-[#FF5A00]" : "text-white/80")} />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-40 rounded-xl p-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-slate-200">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => handleLanguageChange(loc.code)}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors hover:bg-slate-50 hover:text-brand-700 focus:bg-slate-50 focus:text-brand-700"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">{loc.flag}</span>
              {loc.fullName}
            </span>
            {locale === loc.code && (
              <Check className="h-4 w-4 text-brand-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
