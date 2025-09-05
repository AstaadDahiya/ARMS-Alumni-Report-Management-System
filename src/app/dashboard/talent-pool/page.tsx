"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { alumni as allAlumni } from '@/lib/mock-data';
import type { Alumnus } from '@/lib/types';
import { Search, Briefcase, Star, Mail } from 'lucide-react';

export default function TalentPoolPage() {
  const [search, setSearch] = useState('');
  const [availability, setAvailability] = useState('all');
  const [experience, setExperience] = useState('all');

  const filteredAlumni = useMemo(() => {
    return allAlumni.filter(alumnus => {
      const searchMatch = alumnus.name.toLowerCase().includes(search.toLowerCase()) ||
        alumnus.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
        alumnus.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));

      const availabilityMatch = availability === 'all' || alumnus.availability === availability;

      const experienceMatch = experience === 'all' || 
        (experience === '0-2' && alumnus.yearsOfExperience <= 2) ||
        (experience === '3-5' && alumnus.yearsOfExperience >= 3 && alumnus.yearsOfExperience <= 5) ||
        (experience === '6-10' && alumnus.yearsOfExperience >= 6 && alumnus.yearsOfExperience <= 10) ||
        (experience === '10+' && alumnus.yearsOfExperience > 10);
      
      return searchMatch && availabilityMatch && experienceMatch;
    });
  }, [search, availability, experience]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Verified Talent Pool</h1>
        <p className="text-muted-foreground">Find passive candidates and top talent from your alumni network.</p>
      </div>

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
          <Select value={availability} onValueChange={setAvailability}>
            <SelectTrigger className="md:w-[180px]">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Availabilities</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Passive">Passive</SelectItem>
              <SelectItem value="Not looking">Not Looking</SelectItem>
            </SelectContent>
          </Select>
          <Select value={experience} onValueChange={setExperience}>
            <SelectTrigger className="md:w-[180px]">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience</SelectItem>
              <SelectItem value="0-2">0-2 Years</SelectItem>
              <SelectItem value="3-5">3-5 Years</SelectItem>
              <SelectItem value="6-10">6-10 Years</SelectItem>
              <SelectItem value="10+">10+ Years</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAlumni.map(alumnus => (
          <Card key={alumnus.id}>
            <CardHeader className="flex flex-row items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={alumnus.avatarUrl} data-ai-hint="user avatar" />
                <AvatarFallback>{alumnus.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle>{alumnus.name}</CardTitle>
                <CardDescription>{alumnus.jobTitle} at {alumnus.company}</CardDescription>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Briefcase className="mr-1.5 h-4 w-4" /> {alumnus.yearsOfExperience} years experience
                </div>
                 <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Star className="mr-1.5 h-4 w-4" /> 
                  <Badge variant={alumnus.availability === 'Active' ? 'default' : alumnus.availability === 'Passive' ? 'secondary' : 'outline' } className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{alumnus.availability}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {alumnus.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
              <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
