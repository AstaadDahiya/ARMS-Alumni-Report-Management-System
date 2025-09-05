"use client";

import { Button } from "@/components/ui/button";
import { ChatInterface } from "@/components/chat-interface";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { LogOut, ArrowRight, Lightbulb, User } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Logo } from "@/components/ui/logo";

export default function StudentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex h-20 items-center justify-between border-b px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Student Portal
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid md:grid-cols-2 gap-8 p-4 md:p-8">
        <div className="flex flex-col gap-8">
          <Card className="relative overflow-hidden group h-full flex flex-col">
            <Image 
              src="https://picsum.photos/800/600"
              alt="Mentorship Program"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="mentorship connection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <CardHeader className="relative z-10 text-white">
              <CardTitle className="text-3xl font-bold">Mentorship Program</CardTitle>
              <CardDescription className="text-gray-200 text-lg">
                Connect with experienced alumni to guide your career path.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col justify-end flex-grow mt-auto p-6">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 self-start" asChild>
                  <Link href="/dashboard/mentorship/find-a-mentor">
                    Find a Mentor <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="h-7 w-7 text-accent" />
                <span className="text-2xl font-bold">AI Career Guidance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ChatInterface />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
