
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCapIcon } from '@/components/ui/logo';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const roles = ['Alumni', 'Student', 'Admin', 'Government'];

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleRoleSelection = (role: string) => {
    const roleSlug = role.toLowerCase();
    router.push(`/${roleSlug}/login`);
  };

  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-secondary p-4">
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCapIcon className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Select Your Role</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {roles.map((role) => (
              <Button
                key={role}
                onClick={() => handleRoleSelection(role)}
                className="w-full justify-between text-base py-6"
                variant="outline"
              >
                <span>Login as {role}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            ))}
          </CardContent>
        </Card>
      </main>
      <footer className="absolute bottom-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} ARMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
