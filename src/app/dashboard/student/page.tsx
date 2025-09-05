"use client";

import { Button } from "@/components/ui/button";
import { ChatInterface } from "@/components/chat-interface";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, LogOut } from "lucide-react";
import Link from 'next/link';

export default function StudentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-accent" />
          <h1 className="text-lg font-semibold">Student Portal</h1>
        </div>
        <Button variant="outline" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </header>
      <main className="flex-1 grid md:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with experienced alumni who can guide you on your career path.
              </p>
              <Button>Find a Mentor</Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}
