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

const LOCALES = [
  { code: 'id', name: 'ID', fullName: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'EN', fullName: 'English', flag: '🇺🇸' }
];

export function LanguageSwitcher() {
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
      <DropdownMenuTrigger className="group flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 data-[state=open]:bg-slate-50">
        <Globe className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-brand-600" />
        <span className="flex items-center gap-1.5 text-slate-700">
          <span className="text-sm leading-none">{currentLocaleObj.flag}</span>
          <span className="uppercase">{currentLocaleObj.name}</span>
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
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
