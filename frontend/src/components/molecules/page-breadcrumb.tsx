import React from 'react';
import { Link } from '@/i18n/routing';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils/cn';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types/common.types';

export interface PageBreadcrumbProps {
  items: BreadcrumbItemType[];
  className?: string;
}

/**
 * Renders a breadcrumb navigation from an array of items.
 * Last item is rendered as the current page (non-clickable).
 */
export function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn('py-4', className)}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-xs font-semibold uppercase tracking-wider">
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={item.label}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage className="text-foreground text-xs font-bold uppercase tracking-wider">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      asChild
                      className="text-xs font-semibold uppercase tracking-wider"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
