import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'id'],
 
  // Used when no locale matches
  defaultLocale: 'id',
  
  // Custom domains or pathnames can be configured here if needed
  localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
