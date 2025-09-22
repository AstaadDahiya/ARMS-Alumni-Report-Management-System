
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCapIcon } from '@/components/ui/logo';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const roles = ['Alumni', 'Student', 'Admin', 'Government'];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('Government');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const roleSlug = selectedRole.toLowerCase();
    
    if (roleSlug === 'student') {
        router.push('/dashboard/student');
    } else {
        router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-secondary p-4">
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCapIcon className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-md mx-auto shadow-xl">
          <CardHeader>
            <div className="bg-muted p-1 rounded-full flex">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={cn(
                    "w-full rounded-full py-2 text-sm font-medium transition-colors",
                    selectedRole === role ? "bg-background shadow text-foreground" : "text-muted-foreground hover:bg-background/50"
                  )}
                >
                  {role}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="email">Email / Registration Number</Label>
                <Input id="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              {selectedRole === 'Government' && (
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Select>
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
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 text-base py-6">
                Login as {selectedRole} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
