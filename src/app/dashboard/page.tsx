'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, DollarSign, Users, Calendar, ArrowRight, Search, Briefcase } from 'lucide-react';
import { alumni, events, updateRequests } from '@/lib/mock-data';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMemo } from 'react';

export default function DashboardPage() {
  const distinct = <T, K extends keyof T>(items: T[], key: K): T[K][] => 
    Array.from(new Set(items.map(item => item[key])));

  const graduationYears = useMemo(() => distinct(alumni, 'graduationYear').sort((a, b) => b - a), []);
  const locations = useMemo(() => distinct(alumni, 'location').sort(), []);
  const majors = useMemo(() => distinct(alumni, 'major').sort(), []);
  const companies = useMemo(() => distinct(alumni, 'company').sort(), []);


  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Bell size={18} />
          </div>
       </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,013</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">69,88</div>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-primary-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-primary-foreground" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">₹12,333</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {updateRequests.slice(0, 3).map(request => (
                    <div key={request.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                        <div>
                            <p className="font-medium">{request.alumnusName}</p>
                            <p className="text-sm text-muted-foreground">
                                Wants to update their <span className="font-semibold">{request.fieldName}</span>
                            </p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/dashboard/update-requests">
                                Review <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ))}
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Quick links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/alumni"><Users className="mr-2"/> Alumni Directory</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/events"><Calendar className="mr-2"/> Manage Events</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/job-board"><Briefcase className="mr-2"/> Job Board</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
         <Card>
            <CardHeader>
                <CardTitle>Alumni Database</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                    placeholder="Search By Name..." 
                    className="pl-8"
                    />
                </div>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Graduation year" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {graduationYears.map(year => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Major" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Majors</SelectItem>
                        {majors.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        {companies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Button className="w-full">Search</Button>
                <Button variant="secondary" className="w-full">View all</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
