'use client';

/**
 * Admin dashboard layout with sidebar navigation.
 * Wraps all /admin/* pages.
 * @module components/layouts/dashboard-layout
 */

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Bell, Search, User, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Sidebar } from '@/components/organisms/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useMediaQuery } from '@/hooks/use-media-query';
import { AuthProvider } from '@/lib/providers/auth-provider';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth.store';
import { useSidebarStore } from '@/stores/sidebar.store';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { user, isAuthenticated, clearAuth, isHydrated } = useAuthStore();
  const { isCollapsed } = useSidebarStore();
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const { theme, setTheme } = useTheme();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (isHydrated && !isAuthenticated()) {
      router.replace('/login');
    }
  }, [isHydrated, isAuthenticated, router]);

  const initials =
    user?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) ?? 'AD';

  const handleLogout = () => {
    clearAuth();
    router.replace('/login');
  };

  return (
    <AuthProvider>
      <div className="bg-background min-h-dvh">
        {/* Sidebar — Desktop Only */}
        <Sidebar />

        {/* Main Content Area */}
        <div
          className={cn(
            'flex min-h-dvh flex-col transition-all duration-300',
            !isMobile && (isCollapsed ? 'lg:pl-[4.5rem]' : 'lg:pl-64')
          )}
        >
          {/* Top Bar */}
          <header className="bg-background/95 sticky top-0 z-30 h-16 border-b backdrop-blur-md">
            <div className="flex h-full items-center justify-between px-4 lg:px-6">
              {/* Search */}
              <div className="flex max-w-md flex-1 items-center gap-3">
                <div className="relative hidden w-full md:block">
                  <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                  <Input
                    className="bg-muted/50 focus:bg-background focus:border-input border-transparent pl-9"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <Button
                  aria-label="Toggle theme"
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                  }}
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                </Button>

                {/* Notifications */}
                <Button aria-label="Notifications" size="icon-sm" variant="ghost">
                  <Bell className="h-4 w-4" />
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="relative h-8 w-8 rounded-none" variant="ghost">
                      <Avatar className="h-8 w-8">
                        <AvatarImage alt={user?.name ?? 'User'} src={user?.avatar ?? undefined} />
                        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent forceMount align="end" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user?.name}</p>
                        <p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        router.push('/admin/settings');
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={handleLogout}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}
