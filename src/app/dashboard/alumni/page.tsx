
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Calendar, Folder, HeartHandshake } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: "/dashboard/directory", icon: Folder, label: "Alumni Directory", description: "Search and connect with fellow alumni." },
  { href: "/dashboard/job-board", icon: Briefcase, label: "Job Board", description: "Find exclusive career opportunities." },
  { href: "/dashboard/events", icon: Calendar, label: "Events", description: "Stay updated on reunions and networking." },
  { href: "/dashboard/mentorship", icon: HeartHandshake, label: "Mentorship", description: "Guide the next generation of MAIT students." },
];

export default function AlumniLandingPage() {
  return (
    <div className="space-y-8">
        <Card className="overflow-hidden">
            <div className="relative h-48 md:h-64">
                <Image
                    src="https://picsum.photos/seed/alumni-banner/1200/400"
                    alt="Alumni Banner"
                    fill
                    className="object-cover"
                    data-ai-hint="group photo"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-4xl font-bold tracking-tight">Welcome, Alumni!</h1>
                    <p className="mt-2 text-lg max-w-3xl">
                        Reconnect with your peers, expand your professional network, and give back to the MAIT community.
                    </p>
                </div>
            </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
                <Card key={link.href} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-primary/10 text-primary rounded-lg">
                             <link.icon className="h-6 w-6" />
                           </div>
                            <CardTitle>{link.label}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{link.description}</CardDescription>
                    </CardContent>
                    <CardContent>
                         <Button asChild variant="outline" className="w-full">
                            <Link href={link.href}>
                                Go to {link.label}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
        
         <Card>
            <CardHeader>
                <CardTitle>Your Alumni Journey</CardTitle>
                <CardDescription>Explore ways to stay involved and make an impact.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <h3 className="font-semibold">Update Your Profile</h3>
                    <p className="text-sm text-muted-foreground">Keep your information current so others can find you and you don't miss out on relevant opportunities.</p>
                     <Button asChild variant="secondary">
                        <Link href="/dashboard/profile">Manage Profile</Link>
                    </Button>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-semibold">Post a Job</h3>
                    <p className="text-sm text-muted-foreground">Have an opening at your company? Share it with the talented pool of MAIT alumni and students.</p>
                     <Button asChild variant="secondary">
                        <Link href="/dashboard/job-board">Share Opportunity</Link>
                    </Button>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-semibold">Donate</h3>
                    <p className="text-sm text-muted-foreground">Support the next generation and key campus initiatives by contributing to a campaign.</p>
                     <Button asChild variant="secondary">
                        <Link href="/dashboard/donations">Give Back</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
