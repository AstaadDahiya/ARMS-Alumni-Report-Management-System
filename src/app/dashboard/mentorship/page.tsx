
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { alumni } from '@/lib/mock-data';
import { Handshake, Search, UserPlus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const featuredMentors = alumni.slice(0, 3);

export default function MentorshipPage() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-48 md:h-64">
           <Image
            src="https://picsum.photos/seed/mentorship/1200/400"
            alt="Mentorship Program Banner"
            fill
            className="object-cover"
            data-ai-hint="mentorship connection"
          />
           <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
             <Handshake className="h-16 w-16 mb-4" />
            <h1 className="text-4xl font-bold tracking-tight">MAIT Mentorship Program</h1>
            <p className="mt-2 text-lg max-w-3xl">
              Connect with experienced MAIT alumni to gain invaluable career advice, industry insights, and professional guidance.
            </p>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="text-center flex flex-col items-center justify-center p-8">
          <CardHeader>
            <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
                <Search className="h-8 w-8"/>
            </div>
            <CardTitle className="mt-4 text-2xl">Are you a Student?</CardTitle>
            <CardDescription className="text-base">
              Looking for guidance? Find an alumni mentor who can help you navigate your career path and achieve your goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg">Find a Mentor <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </CardContent>
        </Card>
         <Card className="text-center flex flex-col items-center justify-center p-8">
          <CardHeader>
            <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
                <UserPlus className="h-8 w-8"/>
            </div>
            <CardTitle className="mt-4 text-2xl">Are you an Alumnus?</CardTitle>
            <CardDescription className="text-base">
              Share your experience and knowledge. Give back to the MAIT community by mentoring the next generation of leaders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" variant="outline">Become a Mentor <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Featured Mentors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredMentors.map(mentor => (
            <Card key={mentor.id}>
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.avatarUrl} data-ai-hint="user avatar" />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription>{mentor.jobTitle} at {mentor.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {mentor.major} &middot; Class of {mentor.graduationYear}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <Button variant="link" className="px-0 mt-2">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
