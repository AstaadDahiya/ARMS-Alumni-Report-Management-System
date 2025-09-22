

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutGrid,
  Users,
  Calendar,
  Briefcase,
  Newspaper,
  Settings,
  CircleHelp,
  HeartHandshake,
  LogOut,
  Bell,
  Folder,
  User as UserIcon
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { href: "/dashboard/directory", icon: Folder, label: "Alumni Directory" },
  { href: "/dashboard/events", icon: Calendar, label: "Events" },
  { href: "/dashboard/job-board", icon: Briefcase, label: "Job Board" },
  { href: "/dashboard/mentorship", icon: HeartHandshake, label: "Mentorship" },
  { href: "/dashboard/news-and-updates", icon: Newspaper, label: "News and Updates" },
];

const secondaryNavItems = [
    { href: "/dashboard/alumni", icon: UserIcon, label: "Profile" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/contact-us", icon: CircleHelp, label: "Contact Us" },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/dashboard/student' || pathname === '/dashboard/mentorship/find-a-mentor') {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold text-white">ARMS</h1>
            </Link>
            <div className="relative">
                <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <Bell size={20} />
                </Button>
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-sidebar-background"></div>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.href === "/dashboard"
                        ? pathname === item.href
                        : pathname.startsWith(item.href)
                    }
                    className="h-10 justify-start data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground data-[active=true]:shadow-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    tooltip={{ children: item.label, side: "right", align:"center" }}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
          <div className="flex-grow" />
           <SidebarMenu>
            {secondaryNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href)}
                  className="h-10 justify-start data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground data-[active=true]:shadow-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  tooltip={{ children: item.label, side: "right", align:"center" }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 bg-sidebar-accent/50 rounded-lg m-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://picsum.photos/id/237/100/100" data-ai-hint="user avatar" />
                        <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div className="group-data-[collapsible=icon]:hidden">
                        <p className="font-semibold text-sm text-sidebar-foreground">Sameer</p>
                        <p className="text-xs text-sidebar-foreground/70">Admin system</p>
                    </div>
                </div>
                 <form action={logout} className="group-data-[collapsible=icon]:hidden">
                    <Button variant="ghost" size="icon" type="submit" className="text-sidebar-foreground/70 hover:text-sidebar-foreground">
                        <LogOut size={18} />
                    </Button>
                </form>
            </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
