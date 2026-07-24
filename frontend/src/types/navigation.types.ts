/**
 * Navigation and routing types.
 * @module types/navigation
 */

import { type LucideIcon } from 'lucide-react';

/** Public navigation item */
export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly descriptionKey?: string;
  readonly image?: string;
  readonly children?: NavItem[];
  readonly isExternal?: boolean;
}

/** Admin sidebar navigation item */
export interface SidebarNavItem {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly badge?: string | number;
  readonly children?: SidebarNavItem[];
  readonly permissions?: string[];
  readonly isActive?: boolean;
}

/** Admin sidebar navigation group */
export interface SidebarNavGroup {
  readonly title: string;
  readonly items: SidebarNavItem[];
}

/** Footer navigation column */
export interface FooterColumn {
  readonly title: string;
  readonly links: FooterLink[];
}

/** Footer link item */
export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

/** Route parameter types */
export interface SlugParams {
  slug: string;
}

/** Route parameter with ID */
export interface IdParams {
  id: string;
}

/** Page props with params (Next.js App Router) */
export interface PageProps<P = Record<string, string>> {
  params: Promise<P>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}
