'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, DollarSign, Users, Calendar, ArrowRight, UserCheck, Briefcase } from 'lucide-react';
import { alumni, events, updateRequests } from '@/lib/mock-data';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Bell size={18} />
          </div>
       </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Alumni</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{alumni.length.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Update Requests</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{updateRequests.length}</div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">₹12,333</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle>Recent Profile Update Requests</CardTitle>
            <CardDescription>Review and approve recent changes submitted by alumni.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
            </div>
          </CardContent>
           <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/dashboard/update-requests">View All Requests</Link>
            </Button>
          </CardFooter>
        </Card>
         <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
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
            <Button className="w-full justify-start mt-2" asChild>
                <Link href="/dashboard/profile"><UserCheck className="mr-2"/> My Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
