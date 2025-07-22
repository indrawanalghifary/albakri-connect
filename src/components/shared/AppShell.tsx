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
  PanelLeft,
  X,
} from 'lucide-react';
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
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { notifications, users } from '@/lib/data';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

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
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const SidebarContentItems = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <div className="flex h-full flex-col bg-card text-card-foreground">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <BookHeart className="size-8 text-primary" />
          <h1 className="font-headline text-2xl font-bold">Ukhuwah</h1>
        </div>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onLinkClick} className="md:hidden">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
          </Button>
        )}
      </header>
      <nav className="flex-1 space-y-1 p-2">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={onLinkClick}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
              pathname === item.href
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <footer className="mt-auto">
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
      </footer>
    </div>
  );

  const TopBar = () => (
     <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
            <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72" showCloseButton={false}>
                    <SheetTitle className="sr-only">Sidebar Menu</SheetTitle>
                    <SidebarContentItems onLinkClick={() => setSidebarOpen(false)} />
                </SheetContent>
            </Sheet>
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
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-card md:hidden">
      <div className="grid h-16 grid-cols-4">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={cn(
                'flex flex-col items-center justify-center gap-1 p-2 text-xs',
                 pathname === item.href ? 'text-accent font-bold' : 'text-muted-foreground'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
  
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <div className={cn("flex", isMobile ? "flex-col" : "flex-row")}>
        {!isMobile && (
          <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <SidebarContentItems />
          </div>
        )}

        <div className={cn("flex flex-1 flex-col", !isMobile && "md:pl-64")}>
          <TopBar />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
      {isMobile && <div className="h-16" />}
      {isMobile && <BottomNav />}
    </div>
  );
}
