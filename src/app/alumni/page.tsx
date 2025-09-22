
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCapIcon } from '@/components/ui/logo';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AlumniPage() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-secondary p-4">
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCapIcon className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Alumni Portal</CardTitle>
            <CardDescription>Welcome back! Access your dashboard and connect with the community.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full justify-between text-base py-6">
              <Link href="/alumni/login">
                <span>Login to your Account</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
             <Button variant="outline" asChild className="w-full justify-between text-base py-6">
              <Link href="/">
                <span>Back to Home</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
       <footer className="absolute bottom-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ARMS. All rights reserved.</p>
        </footer>
    </div>
  );
}
