
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { alumni } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const currentUser = alumni[0]; // mock current user

export default function AlumniHomePage() {
  return (
    <div className="space-y-8">
       <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tight">Welcome, {currentUser.name.split(' ')[0]}!</CardTitle>
            <CardDescription className="text-lg">Connect with your community and explore opportunities.</CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-3">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Profile</CardTitle>
                            <CardDescription>Keep your information up-to-date.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={currentUser.avatarUrl} data-ai-hint="user avatar" />
                                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{currentUser.name}</p>
                                <p className="text-sm text-muted-foreground">{currentUser.jobTitle}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="/dashboard/profile">
                                    View & Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
           </div>
        </div>
    </div>
  );
}
