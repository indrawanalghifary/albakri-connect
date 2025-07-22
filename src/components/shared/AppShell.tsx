
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Calendar,
  MessageSquare,
  User,
  Bell,
  LogOut,
  BookHeart,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { notifications, users } from '@/lib/data';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const menuItems = [
  { href: '/dashboard', label: 'Feed', icon: Home },
  { href: '/dashboard/schedule', label: 'Schedule', icon: Calendar },
  { href: '/dashboard/chat', label: 'Chat', icon: MessageSquare },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const pageTitles: { [key: string]: string } = {
    '/dashboard': 'Feed',
    '/dashboard/schedule': 'Pengajian Schedule',
    '/dashboard/chat': 'Direct Messages',
    '/dashboard/profile': 'My Profile',
  };

  const currentPageTitle = pageTitles[pathname] || 'Ukhuwah Connect';

  const SidebarItems = () => (
    <>
        <SidebarHeader className="p-4">
            <div className="flex items-center gap-3">
            <BookHeart className="size-8 text-primary" />
            <h1 className="font-headline text-2xl font-bold">Ukhuwah</h1>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
            {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref>
                    <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.label}
                    asChild
                    >
                    <div>
                        <item.icon />
                        <span>{item.label}</span>
                    </div>
                    </SidebarMenuButton>
                </Link>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <Separator className="my-2" />
            <div className="flex items-center gap-3 p-4">
            <Avatar>
                <AvatarImage src={users['user-1'].avatar} alt={users['user-1'].name} />
                <AvatarFallback>{users['user-1'].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="text-sm font-semibold">{users['user-1'].name}</span>
                <span className="text-xs text-muted-foreground">
                {users['user-1'].isUstaz ? 'Ustaz' : 'Jemaah'}
                </span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
                <LogOut className="size-5" />
            </Button>
            </div>
        </SidebarFooter>
    </>
    )

  const bottomNav = (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-card">
      <div className="grid h-16 grid-cols-4">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 p-2 ${pathname === item.href ? 'text-accent' : 'text-muted-foreground'}`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  if (isMobile === undefined) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <Sidebar>
            <SidebarItems />
        </Sidebar>
        <SidebarInset>
            <header className="flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                 <h1 className="font-headline text-xl font-bold hidden md:block">{currentPageTitle}</h1>
              </div>
              <div className="flex items-center gap-4">
                 <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      {notifications.some(n => n.unread) && 
                        <span className="absolute right-1 top-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                      }
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {notifications.map(n => (
                      <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1">
                          <p className={`text-sm ${n.unread ? 'font-bold' : ''}`}>{n.text}</p>
                          <p className="text-xs text-muted-foreground">{n.timestamp}</p>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mx-auto w-full max-w-4xl">
                    {children}
                </div>
            </main>
        </SidebarInset>
        {isMobile && bottomNav}
        {isMobile && <div className="h-16" />} 
      </div>
    </SidebarProvider>
  );
}
