'use client';

/**
 * CMS content editing layout.
 * Two-panel layout with a sidebar for form fields and a main area for content preview.
 * @module components/layouts/cms-layout
 */

import Link from 'next/link';

import { ArrowLeft, Save, Eye, MoreVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils/cn';

interface CmsLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  title: string;
  backHref: string;
  backLabel?: string;
  onSave?: () => void;
  onPreview?: () => void;
  onDelete?: () => void;
  isSaving?: boolean;
  isNew?: boolean;
  status?: 'draft' | 'published' | 'archived';
  className?: string;
}

export function CmsLayout({
  children,
  sidebar,
  title,
  backHref,
  backLabel = 'Back',
  onSave,
  onPreview,
  onDelete,
  isSaving = false,
  isNew = false,
  status,
  className,
}: CmsLayoutProps) {
  return (
    <div className={cn('flex min-h-[calc(100dvh-4rem)] flex-col', className)}>
      {/* Toolbar */}
      <div className="bg-background/95 sticky top-16 z-20 border-b backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" variant="ghost">
              <Link href={backHref}>
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{backLabel}</span>
              </Link>
            </Button>
            <div className="bg-border h-6 w-px" />
            <h1 className="max-w-[200px] truncate text-sm font-semibold sm:max-w-none">
              {isNew ? `New ${title}` : `Edit ${title}`}
            </h1>
            {status && (
              <span
                className={cn(
                  'rounded-none px-2 py-0.5 text-xs font-medium capitalize',
                  status === 'published' &&
                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                  status === 'draft' &&
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
                  status === 'archived' &&
                    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                )}
              >
                {status}
              </span>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {onPreview && (
              <Button size="sm" variant="outline" onClick={onPreview}>
                <Eye className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Preview</span>
              </Button>
            )}
            {onSave && (
              <Button isLoading={isSaving} size="sm" variant="brand" onClick={onSave}>
                <Save className="h-3.5 w-3.5" />
                Save
              </Button>
            )}
            {onDelete && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon-sm" variant="ghost">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onClick={onDelete}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">{children}</div>

        {/* Sidebar / Meta Panel */}
        {sidebar && (
          <aside className="w-full shrink-0 border-t bg-surface-secondary p-4 lg:w-80 lg:border-l lg:border-t-0 lg:p-6 xl:w-96">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
