
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCapIcon } from '@/components/ui/logo';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormStatus } from 'react-dom';
import { login } from '@/app/actions/auth';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  params: { role: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LoginPage({ params }: Props) {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const roleParam = params.role;
  const role = useMemo(() => {
    if (!roleParam) return '';
    return roleParam.charAt(0).toUpperCase() + roleParam.slice(1)
  }, [roleParam]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button className="w-full" disabled={pending} type="submit">
        {pending ? 'Signing In...' : `Sign In`}
      </Button>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-secondary p-4 relative">
        <Button variant="ghost" className="absolute top-8 left-8" asChild>
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4"/> Back to role selection</Link>
        </Button>
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCapIcon className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{role} Login</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={login} className="space-y-4">
              <input type="hidden" name="role" value={roleParam} />
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
               {roleParam === 'government' && (
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Select name="institution">
                    <SelectTrigger id="institution">
                      <SelectValue placeholder="Select Institution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mait">MAIT, Delhi</SelectItem>
                      <SelectItem value="msit">MSIT, Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <SubmitButton />
              {message && (
                <p className="mt-4 p-4 bg-destructive/10 text-destructive text-center text-sm rounded-md">
                  {message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
       <footer className="absolute bottom-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ARMS. All rights reserved.</p>
        </footer>
    </div>
  );
}
