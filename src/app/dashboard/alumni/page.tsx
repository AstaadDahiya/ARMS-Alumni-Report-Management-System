
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Calendar, Folder, UserPlus, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { alumni } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const currentUser = alumni[0]; // mock current user

export default function AlumniHomePage() {
  return (
    <div className="space-y-8">
        <Card className="overflow-hidden shadow-lg">
            <div className="relative h-48 md:h-64">
                <Image
                    src="https://picsum.photos/seed/alumnibanner/1200/400"
                    alt="Alumni Banner"
                    fill
                    className="object-cover"
                    data-ai-hint="university campus"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <h1 className="text-4xl font-bold text-white tracking-tight">Welcome, {currentUser.name.split(' ')[0]}!</h1>
                    <p className="mt-2 text-lg text-gray-200">Connect with your community and explore opportunities.</p>
                </div>
            </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Get Involved</CardTitle>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-1 gap-4">
                         <Link href="/dashboard/mentorship" className="block group">
                            <Card className="h-full hover:bg-muted/50 transition-colors">
                                <CardContent className="p-6 flex items-center">
                                    <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                                       <HeartHandshake className="h-8 w-8"/>
                                    </div>
                                    <div>
                                       <h3 className="font-semibold text-lg">Mentorship Program</h3>
                                       <p className="text-muted-foreground text-sm">Guide current students or find a mentor for yourself.</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </CardContent>
                            </Card>
                         </Link>
                    </CardContent>
                </Card>
           </div>
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
                    <CardContent>
                         <Button asChild className="w-full">
                            <Link href="/dashboard/profile">
                                View & Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                         </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
