
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HandHeart, Target, School, Users, Gift } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { alumni } from '@/lib/mock-data';

const campaigns = [
  {
    id: 1,
    title: 'Modernize Our Campus Library',
    goal: 5000000,
    raised: 2750000,
    description: 'Help us renovate the MAIT central library with new digital resources, study spaces, and a modern infrastructure to foster learning.',
    imageUrl: 'https://picsum.photos/seed/library/600/400',
    dataAiHint: 'modern library',
  },
  {
    id: 2,
    title: 'Scholarships for Underprivileged Students',
    goal: 10000000,
    raised: 8500000,
    description: 'Provide financial assistance to deserving students from economically weaker sections. Your contribution can change a life.',
    imageUrl: 'https://picsum.photos/seed/students/600/400',
    dataAiHint: 'happy students',
  },
   {
    id: 3,
    title: 'Innovation and Entrepreneurship Cell',
    goal: 2500000,
    raised: 1100000,
    description: 'Support the next generation of innovators by funding our E-Cell. Help students turn their startup ideas into reality.',
    imageUrl: 'https://picsum.photos/seed/innovation/600/400',
    dataAiHint: 'startup discussion',
  },
];

const recentDonors = alumni.slice(0, 4).map(alumnus => ({
    name: alumnus.name,
    amount: (alumnus.id * 12345) % 80000 + 10000, // Just generating some random-ish amounts
    avatar: alumnus.avatarUrl,
}));

export default function DonationsPage() {
    const [amount, setAmount] = useState(5000);
    const presetAmounts = [1000, 2500, 5000, 10000];
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg shadow-md">
        <HandHeart className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight">Give Back to MAIT</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Your generous contributions empower us to provide world-class education, foster innovation, and support our students. Every donation, big or small, makes a significant impact.
        </p>
         <Button size="lg" className="mt-6">Donate Now</Button>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Target /> Featured Campaigns
                        </CardTitle>
                        <CardDescription>Support a cause that resonates with you.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-1 gap-6">
                        {campaigns.map((campaign) => (
                        <Card key={campaign.id} className="overflow-hidden flex flex-col sm:flex-row">
                            <div className="sm:w-1/3">
                                <Image
                                    src={campaign.imageUrl}
                                    alt={campaign.title}
                                    width={400}
                                    height={400}
                                    className="object-cover h-full w-full"
                                    data-ai-hint={campaign.dataAiHint}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between sm:w-2/3">
                                <div>
                                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm">{campaign.description}</p>
                                </div>
                                <div className="mt-4">
                                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                                    <div className="flex justify-between items-center text-sm mt-2 text-muted-foreground">
                                        <span>₹{campaign.raised.toLocaleString('en-IN')} raised</span>
                                        <span className="font-medium">Goal: ₹{campaign.goal.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="mt-4 self-start">Donate to this Campaign</Button>
                            </div>
                        </Card>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                           <Gift /> Make a Donation
                        </CardTitle>
                        <CardDescription>Your contribution matters.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                           {presetAmounts.map(pa => (
                                <Button key={pa} variant={amount === pa ? "default" : "outline"} onClick={() => setAmount(pa)}>
                                    ₹{pa.toLocaleString('en-IN')}
                                </Button>
                           ))}
                        </div>
                        <div className="relative">
                            <Label htmlFor="amount" className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">₹</Label>
                            <Input 
                                type="number" 
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="pl-8 text-lg font-bold"
                            />
                        </div>
                         <Button className="w-full" size="lg">Proceed to Payment</Button>
                         <p className="text-xs text-center text-muted-foreground pt-2">All donations are tax-exempt.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Users /> Recent Donors
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentDonors.map((donor) => (
                             <div key={donor.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={donor.avatar} data-ai-hint="user avatar" />
                                        <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{donor.name}</p>
                                        <p className="text-sm text-muted-foreground">Donated recently</p>
                                    </div>
                                </div>
                                 <div className="font-semibold text-primary">
                                    ₹{donor.amount.toLocaleString('en-IN')}
                                 </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
       </div>

    </div>
  );
}
