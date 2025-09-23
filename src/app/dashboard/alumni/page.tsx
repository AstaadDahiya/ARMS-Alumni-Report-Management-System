
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Briefcase, Building, GraduationCap, HardHat, Mail, MapPin, Phone, User, Settings, ArrowRight, UserPlus } from "lucide-react";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { alumni } from "@/lib/mock-data";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  location: z.string().optional(),
  skills: z.string().optional(),
  bio: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Assuming user ID 1 is the logged-in user
const initialUser = alumni.find(a => a.id === 1) || alumni[0];
const initialBio = "A passionate software engineer with over 6 years of experience in building scalable web applications. Specialized in front-end technologies like React and Next.js, with a strong focus on creating intuitive user experiences. Always eager to learn new technologies and take on challenging projects. In my free time, I enjoy contributing to open-source projects and mentoring junior developers.";


export default function AlumniHomePage() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(initialUser);
  const [bio, setBio] = React.useState(initialBio);
  
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
      company: currentUser.company,
      jobTitle: currentUser.jobTitle,
      location: currentUser.location,
      skills: currentUser.skills.join(', '),
      bio: bio,
    },
    values: { // Use values to reflect state changes in the form
        name: currentUser.name,
        email: currentUser.email,
        company: currentUser.company,
        jobTitle: currentUser.jobTitle,
        location: currentUser.location,
        skills: currentUser.skills.join(', '),
        bio: bio,
    },
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Profile Update Submitted",
      description: "Your changes have been sent for administrator validation.",
    });
    
    // Optimistically update the UI
    setCurrentUser(prev => ({
        ...prev,
        name: data.name ?? prev.name,
        email: data.email ?? prev.email,
        company: data.company ?? prev.company,
        jobTitle: data.jobTitle ?? prev.jobTitle,
        location: data.location ?? prev.location,
        skills: data.skills?.split(',').map(s => s.trim()) ?? prev.skills,
    }));
    setBio(data.bio ?? bio);

    setIsEditing(false);
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative h-32 md:h-48">
          <Image 
            src="https://picsum.photos/seed/banner/1200/400"
            alt="Profile banner"
            fill
            className="object-cover"
            data-ai-hint="abstract banner"
          />
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-start -mt-16 sm:-mt-20">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={currentUser.avatarUrl} data-ai-hint="user avatar" />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="mt-4 sm:ml-6 flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{currentUser.name}</h1>
                    <p className="text-lg text-muted-foreground">{currentUser.jobTitle} at {currentUser.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{currentUser.location}</p>
                  </div>
                   <Button onClick={() => setIsEditing(!isEditing)} variant="outline" className="mt-4 sm:mt-0">
                      <Settings className="mr-2 h-4 w-4" />
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                   </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {isEditing ? (
        <Card>
            <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your profile information. Changes will be reviewed by an administrator.</CardDescription>
            </CardHeader>
            <CardContent>
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your current company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Your job title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                          <Input placeholder="Comma-separated skills" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter your skills separated by commas.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <div className="md:col-span-2">
                     <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>About</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us a little bit about yourself" className="min-h-[120px]" {...field} />
                            </FormControl>
                             <FormDescription>
                                A brief bio to show on your profile.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                   </div>
                </div>
                <div className="flex gap-2">
                    <Button type="submit">Submit for Validation</Button>
                    <Button variant="ghost" type="button" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              </form>
            </Form>
            </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><User className="h-5 w-5" /> About</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{bio}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Briefcase className="h-5 w-5" /> Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-muted rounded-md h-fit"><Building className="h-5 w-5"/></div>
                            <div>
                                <h3 className="font-semibold text-lg">{currentUser.jobTitle}</h3>
                                <p>{currentUser.company} &middot; {currentUser.location}</p>
                                <p className="text-sm text-muted-foreground">2020 - Present &middot; {new Date().getFullYear() - 2020} years</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><GraduationCap className="h-5 w-5" /> Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                             <div className="p-3 bg-muted rounded-md h-fit"><GraduationCap className="h-5 w-5"/></div>
                             <div>
                                <h3 className="font-semibold text-lg">Maharaja Agrasen Institute of Technology</h3>
                                <p>Bachelor of Technology, {currentUser.major}</p>
                                <p className="text-sm text-muted-foreground">Graduated {currentUser.graduationYear}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><HardHat className="h-5 w-5" /> Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                       {currentUser.skills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
                    </CardContent>
                </Card>
            </div>
             <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Mentorship Program</CardTitle>
                        <CardDescription>Share your knowledge and experience with the next generation of MAIT students.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <Button size="lg" className="w-full">
                            <UserPlus className="mr-2 h-5 w-5" />Become a Mentor
                         </Button>
                         <Button size="lg" variant="outline" className="w-full" asChild>
                            <Link href="/dashboard/mentorship-requests">
                                Review Requests <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                         </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-center gap-3">
                            <Mail className="text-muted-foreground h-4 w-4"/>
                            <a href={`mailto:${currentUser.email}`} className="text-primary hover:underline">{currentUser.email}</a>
                       </div>
                       <Separator/>
                       <div className="flex items-center gap-3">
                            <Phone className="text-muted-foreground h-4 w-4"/>
                            <span>+91 123-456-7890</span>
                       </div>
                       <Separator/>
                       <div className="flex items-center gap-3">
                            <MapPin className="text-muted-foreground h-4 w-4"/>
                            <span>{currentUser.location}</span>
                       </div>
                    </CardContent>
                </Card>
             </div>
        </div>
      )}
    </div>
  );
}
