
"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { alumni as allAlumni } from '@/lib/mock-data';
import type { Alumnus } from '@/lib/types';
import { Search } from 'lucide-react';

export default function AlumniDirectoryPage() {
  const [search, setSearch] = useState('');
  const [graduationYear, setGraduationYear] = useState('all');
  const [location, setLocation] = useState('all');
  const [major, setMajor] = useState('all');
  const [company, setCompany] = useState('all');

  const distinct = <T, K extends keyof T>(items: T[], key: K): T[K][] => 
    Array.from(new Set(items.map(item => item[key])));

  const graduationYears = useMemo(() => distinct(allAlumni, 'graduationYear').sort((a, b) => b - a), []);
  const locations = useMemo(() => distinct(allAlumni, 'location').sort(), []);
  const majors = useMemo(() => distinct(allAlumni, 'major').sort(), []);
  const companies = useMemo(() => distinct(allAlumni, 'company').sort(), []);

  const filteredAlumni = useMemo(() => {
    return allAlumni.filter(alumnus => {
      const searchMatch = alumnus.name.toLowerCase().includes(search.toLowerCase());
      const yearMatch = graduationYear === 'all' || alumnus.graduationYear === Number(graduationYear);
      const locationMatch = location === 'all' || alumnus.location === location;
      const majorMatch = major === 'all' || alumnus.major === major;
      const companyMatch = company === 'all' || alumnus.company === company;
      
      return searchMatch && yearMatch && locationMatch && majorMatch && companyMatch;
    });
  }, [search, graduationYear, location, major, company]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Alumni Database</h1>
        <p className="text-muted-foreground">Search and filter through the alumni network.</p>
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search By Name..." 
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={graduationYear} onValueChange={setGraduationYear}>
              <SelectTrigger><SelectValue placeholder="Graduation year" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {graduationYears.map(year => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
              </SelectContent>
            </Select>
             <Select value={major} onValueChange={setMajor}>
              <SelectTrigger><SelectValue placeholder="Major" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Majors</SelectItem>
                {majors.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={company} onValueChange={setCompany}>
               <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
               <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {companies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAlumni.map(alumnus => (
          <Card key={alumnus.id}>
            <CardHeader className="flex-row gap-4 items-center">
               <Avatar className="w-12 h-12">
                  <AvatarImage src={alumnus.avatarUrl} data-ai-hint="user avatar" />
                  <AvatarFallback>{alumnus.name.charAt(0)}</AvatarFallback>
                </Avatar>
              <div>
                <CardTitle className="text-lg">{alumnus.name}</CardTitle>
                <CardDescription>{alumnus.jobTitle}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">{alumnus.company}</p>
                <div><Badge variant="outline">{alumnus.major}</Badge> - {alumnus.graduationYear}</div>
                 <div className="flex flex-wrap gap-1 pt-2">
                    {alumnus.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
