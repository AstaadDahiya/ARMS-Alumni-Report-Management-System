
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Brush, Trash2, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings, notifications, and appearance.
          </p>
        </div>
        <ThemeToggle />
      </div>


      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">
            <User className="mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Brush className="mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                 <Label htmlFor="name">Name</Label>
                 <Input id="name" defaultValue="Jane Doe" disabled/>
               </div>
                <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input id="email" defaultValue="jane.doe@example.com" disabled/>
               </div>
               <Button>Update Profile</Button>
               <Separator />
                <div>
                    <h3 className="text-lg font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground mb-4">Change your password here. It's a good practice to use a strong password.</p>
                    <Button variant="outline">Change Password</Button>
                </div>

               <Separator />
                <div>
                    <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Permanently delete your account and all of your content. This action is not reversible.
                    </p>
                    <Button variant="destructive">
                        <Trash2 className="mr-2"/>
                        Delete Account
                    </Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose what you want to be notified about.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-medium">Email Notifications</h4>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="newsletter">Newsletter</Label>
                        <p className="text-xs text-muted-foreground">Receive weekly updates and news.</p>
                    </div>
                  <Switch id="newsletter" defaultChecked />
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                     <div>
                        <Label htmlFor="event-updates">Event Updates</Label>
                        <p className="text-xs text-muted-foreground">Get notified about new events and reunions.</p>
                    </div>
                  <Switch id="event-updates" defaultChecked/>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                     <div>
                        <Label htmlFor="job-alerts">Job Alerts</Label>
                        <p className="text-xs text-muted-foreground">Receive notifications for new job postings.</p>
                    </div>
                  <Switch id="job-alerts" />
                </div>
              </div>
              <Separator/>
               <div className="space-y-2">
                <h4 className="font-medium">Push Notifications</h4>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="push-everything">Everything</Label>
                        <p className="text-xs text-muted-foreground">Receive push notifications for all activities.</p>
                    </div>
                  <Switch id="push-everything" />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="push-mentions">Mentions</Label>
                        <p className="text-xs text-muted-foreground">Get notified when someone mentions you.</p>
                    </div>
                  <Switch id="push-mentions" defaultChecked/>
                </div>
              </div>
               <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Theme</h3>
                    <p className="text-sm text-muted-foreground mb-4">Select the theme for the dashboard.</p>
                    <div className="flex items-center space-x-2">
                        <Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => setTheme('light')}>Light</Button>
                        <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>Dark</Button>
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
