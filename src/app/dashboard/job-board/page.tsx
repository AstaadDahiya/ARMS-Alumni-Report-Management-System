
"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { jobs as allJobs } from '@/lib/mock-data';
import type { Job } from '@/lib/types';
import { Search, MapPin, Briefcase, Building, PlusCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function JobBoardPage() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('all');
  const [jobType, setJobType] = useState('all');
  const [industry, setIndustry] = useState('all');

  const distinct = <T, K extends keyof T>(items: T[], key: K): T[K][] => 
    Array.from(new Set(items.map(item => item[key])));

  const locations = useMemo(() => distinct(allJobs, 'location').sort(), []);
  const industries = useMemo(() => distinct(allJobs, 'industry').sort(), []);
  const jobTypes = useMemo(() => distinct(allJobs, 'type').sort(), []);

  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      const searchMatch = job.title.toLowerCase().includes(search.toLowerCase()) ||
                          job.company.toLowerCase().includes(search.toLowerCase());
      const locationMatch = location === 'all' || job.location === location;
      const jobTypeMatch = jobType === 'all' || job.type === jobType;
      const industryMatch = industry === 'all' || job.industry === industry;
      
      return searchMatch && locationMatch && jobTypeMatch && industryMatch;
    });
  }, [search, location, jobType, industry]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Job Board</h1>
          <p className="text-muted-foreground">Find your next career opportunity from our exclusive network.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Post a Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Job Posting</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" placeholder="e.g., Software Engineer" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g., New Delhi, India" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
                 <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea id="description" placeholder="Describe the role, responsibilities, and qualifications." className="min-h-[150px]" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Post Job</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by job title or company..." 
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger><SelectValue placeholder="Job Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                {jobTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={industry} onValueChange={setIndustry}>
               <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
               <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map(ind => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-1">
        {filteredJobs.map(job => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl hover:underline cursor-pointer">{job.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center"><Building className="mr-1.5 h-4 w-4"/> {job.company}</div>
                        <div className="flex items-center"><MapPin className="mr-1.5 h-4 w-4"/> {job.location}</div>
                        <div className="flex items-center"><Briefcase className="mr-1.5 h-4 w-4"/> {job.type}</div>
                    </div>
                  </div>
                   <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                    {job.type}
                   </Badge>
              </div>
            </CardHeader>
            <CardContent>
                <CardDescription>{job.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Posted {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}</span>
              <Button variant="outline">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
        {filteredJobs.length === 0 && (
            <Card className="text-center p-12">
                <CardTitle>No jobs found</CardTitle>
                <CardDescription>Try adjusting your search filters.</CardDescription>
            </Card>
        )}
      </div>
    </div>
  );
}
