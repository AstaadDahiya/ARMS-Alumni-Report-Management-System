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
  GraduationCap,
  Star,
  UserCheck,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { href: "/dashboard/alumni", icon: Users, label: "Alumni Directory" },
  { href: "/dashboard/events", icon: Calendar, label: "Events" },
  { href: "/dashboard/job-board", icon: Briefcase, label: "Job Board" },
  { href: "/dashboard/talent-pool", icon: Star, label: "Talent Pool"},
  { href: "/dashboard/donations", icon: DollarSign, label: "Donations" },
  { href: "/dashboard/news-and-updates", icon: Newspaper, label: "News and Updates" },
  { href: "/dashboard/update-requests", icon: UserCheck, label: "Update Requests" },
];

const secondaryNavItems = [
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/contact-us", icon: CircleHelp, label: "Contact Us" },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard/student')) {
    return <main className="flex-1 p-4 sm:p-6 bg-background/90">{children}</main>;
  }

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <GraduationCap className="size-8 text-white" />
            <h1 className="text-xl font-semibold text-white">ARMS</h1>
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
        <main className="flex-1 p-4 sm:p-6 bg-background/90">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
