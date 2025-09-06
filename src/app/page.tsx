
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCapIcon } from '@/components/ui/logo';
import { User, Shield, UserSquare } from 'lucide-react';
import Link from 'next/link';

const roles = [
    { name: 'Student', icon: User, href: '/student/login', variant: 'secondary' as const },
    { name: 'Alumni', icon: UserSquare, href: '/alumni/login', variant: 'default' as const },
    { name: 'Admin', icon: Shield, href: '/admin/login', variant: 'outline' as const },
]

export default function RoleSelectionPage() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-secondary p-4">
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCapIcon className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Select your role to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
                {roles.map((role) => (
                    <Button key={role.name} variant={role.variant} className="w-full justify-start text-base py-6" asChild>
                       <Link href={role.href}>
                         <role.icon className="mr-4 h-5 w-5" />
                         {role.name}
                       </Link>
                    </Button>
                ))}
            </div>
          </CardContent>
        </Card>
      </main>
       <footer className="absolute bottom-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ARMS. All rights reserved.</p>
        </footer>
    </div>
  );
}
