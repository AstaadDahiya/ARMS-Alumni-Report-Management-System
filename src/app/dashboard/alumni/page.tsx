
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { Briefcase, Calendar, Users, HeartHandshake, FileText, Edit, Newspaper } from "lucide-react";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { alumni, news } from "@/lib/mock-data";

const alumniByIndustry = [
    { industry: "Tech", count: 2800 },
    { industry: "Finance", count: 1500 },
    { industry: "Consulting", count: 1200 },
    { industry: "Healthcare", count: 800 },
    { industry: "Education", count: 500 },
    { industry: "Other", count: 213 },
];

const alumniGrowth = [
    { year: "2020", count: 4500 },
    { year: "2021", count: 5100 },
    { year: "2022", count: 5800 },
    { year: "2023", count: 6500 },
    { year: "2024", count: 7013 },
];

const recentActivity = [
    {
        user: "Lakshya Jangra",
        avatar: "https://picsum.photos/id/302/40/40",
        action: "posted a new job: 'Hardware Engineer at Nvidia'."
    },
    {
        user: "Aryan Dahiya",
        avatar: "https://picsum.photos/id/303/40/40",
        action: "accepted a mentorship request."
    },
    {
        user: "Admin",
        avatar: null,
        action: "posted a new event: 'MAIT Annual Alumni Reunion 2024'."
    }
]


export default function AlumniDashboardPage() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold">Alumni Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's a snapshot of your network.</p>
            </div>
            <Button asChild>
                <Link href="/dashboard/directory">Explore Directory</Link>
            </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Your Network</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">7,013 Alumni</div>
                    <p className="text-xs text-muted-foreground">+250 since last month</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Job Opportunities</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">124 Active</div>
                    <p className="text-xs text-muted-foreground">+15 new this week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5 Events</div>
                    <p className="text-xs text-muted-foreground">Next one: Annual Reunion</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                    <HeartHandshake className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹1.2 Cr</div>
                    <p className="text-xs text-muted-foreground">Supporting student scholarships</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Alumni by Industry</CardTitle>
                    <CardDescription>Distribution of alumni across various sectors.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={alumniByIndustry} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="industry" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))',
                                }}
                            />
                            <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
             <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Network Growth</CardTitle>
                    <CardDescription>Total alumni registered over the years.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={alumniGrowth} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} />
                             <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))',
                                }}
                             />
                            <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                             <Avatar className="h-9 w-9">
                                {activity.avatar && <AvatarImage src={activity.avatar} />}
                                <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">{activity.user}</span> {activity.action}
                            </p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/profile"><Edit className="mr-2 h-4 w-4" /> Update Your Profile</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                       <Link href="/dashboard/job-board"><Briefcase className="mr-2 h-4 w-4" /> Post a Job Opportunity</Link>
                    </Button>
                     <Button variant="outline" className="w-full justify-start" asChild>
                       <Link href="/dashboard/mentorship"><HeartHandshake className="mr-2 h-4 w-4" /> Become a Mentor</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {news.slice(0, 3).map(article => (
                        <Link href="/dashboard/news-and-updates" key={article.id} className="block hover:bg-muted p-2 rounded-md">
                            <h4 className="font-semibold text-sm truncate">{article.title}</h4>
                            <p className="text-xs text-muted-foreground">{article.category}</p>
                        </Link>
                    ))}
                    <Button variant="ghost" asChild className="w-full">
                        <Link href="/dashboard/news-and-updates">View All News</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
