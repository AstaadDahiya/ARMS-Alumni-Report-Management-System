'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, DollarSign, Users, Calendar } from 'lucide-react';
import { alumni, events } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Bell size={18} />
          </div>
       </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Alumni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{alumni.length.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-accent">{events.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Donations</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold">₹12,333</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
          </CardHeader>
           <CardContent className="space-y-4">
            <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
          </CardContent>
        </Card>
         <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="h-10 bg-white border rounded-md"></div>
             <div className="grid grid-cols-2 gap-4">
               <div className="h-10 bg-primary rounded-md animate-pulse"></div>
               <div className="h-10 bg-primary rounded-md animate-pulse"></div>
             </div>
              <div className="h-10 bg-primary rounded-md animate-pulse"></div>
              <div className="h-10 bg-primary rounded-md animate-pulse"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
