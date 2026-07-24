'use client';

import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';

import { PanelLeftClose, PanelLeft, LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { siteConfig } from '@/lib/config/site.config';
import { ADMIN_NAV_GROUPS } from '@/lib/constants/navigation.constants';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth.store';
import { useSidebarStore } from '@/stores/sidebar.store';

/**
 * Collapsible admin sidebar with permission-based navigation groups,
 * tooltip labels in collapsed state, and logout action.
 */
export function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleCollapse } = useSidebarStore();
  const { clearAuth, hasPermission } = useAuthStore();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          'bg-sidebar fixed left-0 top-0 z-40 hidden h-dvh flex-col border-r transition-all duration-300 lg:flex',
          isCollapsed ? 'w-[4.5rem]' : 'w-64'
        )}
      >
        {/* Header */}
        <div
          className={cn(
            'flex h-16 shrink-0 items-center border-b px-4',
            isCollapsed ? 'justify-center' : 'gap-3'
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-gradient-to-br from-brand-500 to-brand-700">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          {!isCollapsed && (
            <span className="text-sidebar-foreground truncate font-heading text-sm font-semibold">
              {siteConfig.company.shortName}
            </span>
          )}
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav aria-label="Admin navigation">
            {ADMIN_NAV_GROUPS.map((group) => {
              const filteredItems = group.items.filter(
                (item) => !item.permissions || item.permissions.some((p) => hasPermission(p))
              );
              if (filteredItems.length === 0) {
                return null;
              }

              return (
                <div key={group.title} className="mb-4 px-3">
                  {!isCollapsed && (
                    <p className="text-muted-foreground mb-2 px-3 text-xs font-semibold uppercase tracking-wider">
                      {group.title}
                    </p>
                  )}
                  {isCollapsed && <Separator className="mb-2" />}
                  <ul className="space-y-0.5">
                    {filteredItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      const linkContent = (
                        <Link
                          className={cn(
                            'flex items-center gap-3 rounded-none px-3 py-2.5 text-sm font-medium transition-colors duration-150',
                            active
                              ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                            isCollapsed && 'justify-center px-2'
                          )}
                          href={item.href}
                        >
                          <Icon className="h-4.5 w-4.5 shrink-0" />
                          {!isCollapsed && <span className="truncate">{item.label}</span>}
                          {!isCollapsed && item.badge !== null && item.badge !== undefined && (
                            <span className="bg-destructive text-destructive-foreground ml-auto min-w-[1.25rem] rounded-none px-1.5 py-0.5 text-center text-xs">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );

                      return (
                        <li key={item.href}>
                          {isCollapsed ? (
                            <Tooltip>
                              <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                              <TooltipContent className="font-medium" side="right">
                                {item.label}
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            linkContent
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="shrink-0 space-y-2 border-t p-3">
          <Button
            className={cn('w-full', isCollapsed ? 'justify-center' : 'justify-start')}
            size="sm"
            variant="ghost"
            onClick={toggleCollapse}
          >
            {isCollapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
            {!isCollapsed && <span className="ml-2">Collapse</span>}
          </Button>
          <Button
            className={cn(
              'text-destructive hover:text-destructive hover:bg-destructive/10 w-full',
              isCollapsed ? 'justify-center' : 'justify-start'
            )}
            size="sm"
            variant="ghost"
            onClick={() => {
              clearAuth();
            }}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
