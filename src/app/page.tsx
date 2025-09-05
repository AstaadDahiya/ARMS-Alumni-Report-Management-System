import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, User, UserCheck, Shield } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-background p-4">
      <header className="absolute top-8 flex items-center space-x-3 text-center">
        <GraduationCap className="h-12 w-12 text-accent" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">ARMS</h1>
      </header>
      <main>
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Select your role to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button asChild className="w-full" variant="outline">
                <a href="/dashboard/student">
                  <User className="mr-2" />
                  Student
                </a>
              </Button>
              <Button asChild className="w-full">
                 <a href="/dashboard">
                  <UserCheck className="mr-2" />
                  Alumni
                </a>
              </Button>
              <Button asChild className="w-full" variant="secondary">
                 <a href="/dashboard">
                  <Shield className="mr-2" />
                  Admin
                </a>
              </Button>
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
