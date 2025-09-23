
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, User, Search, Edit, Plus, Briefcase, ChevronDown, Download, Check, X, Shield } from 'lucide-react';
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

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
         </div>
          <div className="flex items-center gap-2">
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Import</Button>
            <Button><Plus className="mr-2 h-4 w-4" /> Create</Button>
          </div>
       </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">7,013</div>
            <div className='w-1/2 h-1 bg-muted-foreground/20 mt-1 rounded-full' />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">5</div>
            <div className='w-1/2 h-1 bg-green-500 mt-1 rounded-full' />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12</div>
             <div className='w-1/2 h-1 bg-muted-foreground/20 mt-1 rounded-full' />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold">₹12,333</div>
             <div className='w-1/2 h-1 bg-muted-foreground/20 mt-1 rounded-full' />
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
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://picsum.photos/id/301/40/40" />
                        <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                    <p>Alex Massy updated his profile</p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                    <Avatar className='h-8 w-8 bg-black text-white'>
                        <Bell size={16}/>
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
                               <User size={18}/> Add New Alumni
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='p-4'>
                          Add new alumni details here.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className='bg-secondary px-4 rounded-md mt-2'>
                           <div className="flex items-center gap-2">
                                <Plus size={18}/> Create New Event
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
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alumni Database</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search By Name..." className="pl-8" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Graduation year" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="sf">San Francisco</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Major" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                {alumniDb.map(alumnus => (
                    <div key={alumnus.name} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={alumnus.avatar} data-ai-hint="user avatar" />
                                <AvatarFallback>{alumnus.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium text-sm">{alumnus.name}</p>
                                <p className="text-xs text-muted-foreground">{alumnus.org}</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                            <Edit className="h-3 w-3 mr-1"/>
                            Edit
                        </Button>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
