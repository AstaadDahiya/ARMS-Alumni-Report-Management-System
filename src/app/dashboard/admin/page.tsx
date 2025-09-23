
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Users, HeartHandshake, FileText, Edit, Newspaper, Shield, Search, Plus, UserPlus, Bell, ChevronDown, Download } from "lucide-react";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { news, alumni } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const recentActivity = [
    {
        user: "Alex Massy",
        avatar: "https://picsum.photos/id/301/40/40",
        action: "updated his profile"
    },
    {
        user: "New event",
        icon: Bell,
        action: "2026 Orientation"
    }
];

const alumniInDb = alumni.slice(0, 4);

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <div>
                 <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                 </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Import</Button>
                <Button><Plus className="mr-2 h-4 w-4" /> Create</Button>
            </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">7,013</div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Approvals</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12</div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Donations</CardTitle>
                    <HeartHandshake className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹12,333</div>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center gap-3 bg-muted p-3 rounded-lg">
                                {activity.avatar ? (
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={activity.avatar} />
                                        <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                ) : activity.icon ? (
                                    <div className="p-2 bg-background rounded-full">
                                        <activity.icon className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                ) : null}
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">{activity.user}</span> {activity.action}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick links</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <UserPlus className="h-5 w-5" />
                                        <span>Add New Alumni</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">Quickly add a new alumnus to the database.</p>
                                    <Button className="mt-2">Go to Form</Button>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5" />
                                        <span>Create New Event</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                     <p className="text-muted-foreground">Organize a new event for the community.</p>
                                    <Button className="mt-2">Go to Events</Button>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="h-5 w-5" />
                                        <span>Post Job</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">Post a new job opportunity for alumni.</p>
                                    <Button className="mt-2">Go to Job Board</Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
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
                        <Input placeholder="Search By Name..." className="pl-8" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Graduation year" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
                            <SelectContent>
                                 <SelectItem value="ny">New York, NY</SelectItem>
                                <SelectItem value="sf">San Francisco, CA</SelectItem>
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
                        {alumniInDb.map(alumnus => (
                            <div key={alumnus.id} className="flex items-center justify-between bg-muted p-2 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={alumnus.avatarUrl} data-ai-hint="user avatar" />
                                        <AvatarFallback>{alumnus.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">{alumnus.name}</p>
                                        <p className="text-xs text-muted-foreground">{alumnus.company}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
