import type { PageBreadcrumbProps } from './page-breadcrumb';

export interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: PageBreadcrumbProps['items'];
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Interior page header with breadcrumbs, title, description, and optional action buttons.
 * Used at the top of non-hero public pages and admin pages.
 */
export function PageHeader(_props: PageHeaderProps) {
  return null;
}
