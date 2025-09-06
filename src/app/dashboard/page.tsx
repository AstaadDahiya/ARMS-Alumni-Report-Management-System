
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Users, Calendar, User, Search, Edit, Plus, Briefcase, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const alumniDb = [
    { name: 'Alex Massy', org: 'JP Morgan', avatar: 'https://picsum.photos/id/301/40/40' },
    { name: 'Lakshya Jangra', org: 'Nvidia', avatar: 'https://picsum.photos/id/302/40/40' },
    { name: 'Aryan Dahiya', org: 'Google', avatar: 'https://picsum.photos/id/303/40/40' },
    { name: 'Nikhil Bokaria', org: 'IBM', avatar: 'https://picsum.photos/id/304/40/40' },
]

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
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">7,013</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-500">69,88</div>
            <div className='w-1/2 h-1 bg-green-500 mt-1 rounded-full' />
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground relative">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12</div>
             <div className='w-1/2 h-1 bg-primary-foreground mt-1 rounded-full' />
          </CardContent>
           <div className="absolute top-3 right-3 w-3 h-3 bg-blue-500 rounded-full border-2 border-primary"></div>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold">₹12,333</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                    <Avatar className='h-8 w-8'>
                        <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                    <p>Alex Massy updated his profile</p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                    <Avatar className='h-8 w-8'>
                        <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                    <p>New event: 2026 Orientation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Quick links</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className='bg-secondary px-4 rounded-md'>
                            <div className="flex items-center gap-2">
                               <Users size={18}/> Add New Alumni
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='p-4'>
                          Add new alumni details here.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className='bg-secondary px-4 rounded-md mt-2'>
                           <div className="flex items-center gap-2">
                                <Calendar size={18}/> Create New Event
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='p-4'>
                         Create a new event here.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className='bg-secondary px-4 rounded-md mt-2'>
                           <div className="flex items-center gap-2">
                                <Briefcase size={18}/> Post Job
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='p-4'>
                          Post a new job here.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
