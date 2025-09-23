
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, LineChart, Download, Settings, Filter, HelpCircle } from "lucide-react";
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const institutionData = [
  { name: 'PU', 'Placement %': 82, 'Research Index': 75 },
  { name: 'GNDU', 'Placement %': 78, 'Research Index': 72 },
  { name: 'Punjabi', 'Placement %': 85, 'Research Index': 68 },
  { name: 'PAU', 'Placement %': 70, 'Research Index': 65 },
  { name: 'GNE', 'Placement %': 92, 'Research Index': 88 },
  { name: 'Thapar', 'Placement %': 88, 'Research Index': 80 },
  { name: 'SLIET', 'Placement %': 81, 'Research Index': 78 },
  { name: 'GADVASU', 'Placement %': 90, 'Research Index': 85 },
];

const engagementData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 2210 },
  { name: 'Mar', value: 2290 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 2181 },
  { name: 'Jun', value: 2500 },
  { name: 'Jul', value: 2780 },
];

const navItems = ["State Overview", "Institution Insights", "Policy Impact", "Alumni Analytics", "Funding Allocation", "Success Metrics"];

export default function GovernmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground font-bold text-sm p-2 rounded-md">PB</div>
                <h1 className="text-xl font-bold">Punjab</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navItems.map(item => (
                   <a key={item} href="#" className={`text-muted-foreground hover:text-foreground transition-colors ${item === 'State Overview' ? 'text-primary font-semibold' : ''}`}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/>Export</Button>
                <Button variant="outline" size="sm"><Settings className="mr-2 h-4 w-4"/>Configure</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader>
                    <CardDescription>Total alumni across institutions</CardDescription>
                    <CardTitle className="text-4xl">1,482,310</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardDescription>Employment rate (recent grads)</CardDescription>
                    <CardTitle className="text-4xl">78%</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardDescription>Contribution to state GDP</CardDescription>
                    <CardTitle className="text-4xl">₹12,540 Cr</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardDescription>Cross-institution collaborations</CardDescription>
                    <CardTitle className="text-4xl">326</CardTitle>
                </CardHeader>
            </Card>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Institution Performance Comparison</CardTitle>
                <CardDescription>Benchmarking placements and research output</CardDescription>
              </div>
              <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={institutionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fontSize: 12}} />
                  <YAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} />
                  <Tooltip />
                  <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                  <Bar dataKey="Placement %" fill="var(--color-pu)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Research Index" fill="var(--color-research)" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
              <style jsx global>{`
                :root {
                  --color-pu: hsl(221 83% 53%);
                  --color-research: hsl(142 71% 47%);
                }
                .dark {
                   --color-pu: hsl(221 83% 63%);
                  --color-research: hsl(142 71% 57%);
                }
              `}</style>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Statewide Engagement</CardTitle>
              <CardDescription>Growth in network connections</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] flex flex-col">
              <div className="flex-grow">
                 <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-4">Last 6 months &bull; +18% MoM</p>
            </CardContent>
          </Card>
        </div>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             <Card>
                <CardHeader>
                    <CardTitle>Education Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Analysis of graduation rates and skills.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Economic Impact</CardTitle>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">Tracking alumni contribution to the economy.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Institutional Performance</CardTitle>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">Detailed metrics for each institution.</p>
                </CardContent>
            </Card>
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <Button variant="ghost" size="icon" className="rounded-full bg-card shadow-lg">
            <HelpCircle className="h-6 w-6"/>
        </Button>
      </div>
    </div>
  );
}

    