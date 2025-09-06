
"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { alumni as allAlumni } from '@/lib/mock-data';
import { Search, Briefcase, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import type { Alumnus } from '@/lib/types';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function FindMentorPage(): JSX.Element {
  const [search, setSearch] = useState('');
  const [major, setMajor] = useState('all');
  const [company, setCompany] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState<Alumnus | null>(null);
  const { toast } = useToast();

  const distinct = <T, K extends keyof T>(items: T[], key: K): T[K][] =>
    Array.from(new Set(items.map(item => item[key])));

  const majors = useMemo(() => distinct(allAlumni, 'major').sort(), []);
  const companies = useMemo(() => distinct(allAlumni, 'company').sort(), []);

  const filteredMentors = useMemo(() => {
    return allAlumni.filter(alumnus => {
      const searchMatch = alumnus.name.toLowerCase().includes(search.toLowerCase()) ||
        alumnus.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
        alumnus.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
      const majorMatch = major === 'all' || alumnus.major === major;
      const companyMatch = company === 'all' || alumnus.company === company;

      return searchMatch && majorMatch && companyMatch;
    });
  }, [search, major, company]);

  const handleSendRequest = () => {
    if (selectedMentor) {
      toast({
        title: `Request Sent to ${selectedMentor.name}`,
        description: "You will be notified when your request is accepted.",
      });
      setSelectedMentor(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 sm:px-6 backdrop-blur">
        <Link href="/dashboard/student">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-xl">Find a Mentor</h1>
          <p className="text-sm text-muted-foreground">Connect with experienced alumni from MAIT.</p>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 sm:p-6 space-y-6">
        <Card>
          <CardContent className="p-4 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, title, or skills..."
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={major} onValueChange={setMajor}>
              <SelectTrigger className="md:w-[200px]">
                <SelectValue placeholder="Filter by Major" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Majors</SelectItem>
                {majors.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger className="md:w-[200px]">
                <SelectValue placeholder="Filter by Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                {companies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMentors.map(mentor => (
            <Card key={mentor.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.avatarUrl} data-ai-hint="user avatar" />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mentor.name}</CardTitle>
                    <CardDescription>{mentor.jobTitle} at {mentor.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Briefcase className="mr-1.5 h-4 w-4" /> {mentor.yearsOfExperience} years experience
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.slice(0, 3).map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  {mentor.skills.length > 3 && <Badge variant="outline">+{mentor.skills.length - 3}</Badge>}
                </div>
                <Button className="w-full mt-4" onClick={() => setSelectedMentor(mentor)}>
                  <Send className="mr-2 h-4 w-4" /> Send Request
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredMentors.length === 0 && (
          <Card className="text-center p-12 col-span-full">
            <CardTitle>No Mentors Found</CardTitle>
            <CardDescription>Try adjusting your search filters.</CardDescription>
          </Card>
        )}
      </main>

      <Dialog open={!!selectedMentor} onOpenChange={(isOpen) => !isOpen && setSelectedMentor(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Mentorship Request to {selectedMentor?.name}</DialogTitle>
            <DialogDescription>
              Write a short message introducing yourself and what you're looking for in a mentor.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder={`Hi ${selectedMentor?.name}, I am a student at MAIT and I'd love to connect...`}
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setSelectedMentor(null)}>Cancel</Button>
            <Button onClick={handleSendRequest}>Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
