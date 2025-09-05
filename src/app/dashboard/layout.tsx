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
} from "@/components/ui/sidebar";
import {
  LayoutGrid,
  Users,
  Calendar,
  Briefcase,
  Newspaper,
  Settings,
  CircleHelp,
  DollarSign,
  HeartHandshake,
  User as UserIcon,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { href: "/dashboard/alumni", icon: Users, label: "Alumni Directory" },
  { href: "/dashboard/events", icon: Calendar, label: "Events" },
  { href: "/dashboard/job-board", icon: Briefcase, label: "Job Board" },
  { href: "/dashboard/donations", icon: DollarSign, label: "Donations" },
  { href: "/dashboard/mentorship", icon: HeartHandshake, label: "Mentorship" },
  { href: "/dashboard/news-and-updates", icon: Newspaper, label: "News and Updates" },
];

const secondaryNavItems = [
    { href: "/dashboard/profile", icon: UserIcon, label: "My Profile"},
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
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2 p-4">
            <Logo className="h-8 w-8" />
            <h1 className="text-2xl font-semibold text-white">ARMS</h1>
          </Link>
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
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6 bg-secondary">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
