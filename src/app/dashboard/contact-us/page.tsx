
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function ContactUsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">We're here to help. Reach out to us with any questions or feedback.</p>
      </div>

      <Card>
        <div className="relative h-64 w-full">
            <Image 
                src="https://picsum.photos/seed/map/1200/400"
                alt="MAIT Campus Map"
                fill
                className="object-cover rounded-t-lg"
                data-ai-hint="campus map"
            />
        </div>
        <div className="grid md:grid-cols-2">
          <div className="p-8 space-y-6">
            <CardHeader className="p-0">
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Use the form to send us a message, or contact us directly using the details below.
              </CardDescription>
            </CardHeader>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="p-8 bg-muted/50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none space-y-6">
            <CardHeader className="p-0">
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p>Maharaja Agrasen Institute of Technology, PSP Area, Plot No. 1, Sector-22, Rohini, Delhi-110086</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                 <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p>8448186175</p>
                  <p>8448186176</p>
                  <p>8448186177</p>
                  <p>8448186178</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                 <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:mait@mait.ac.in" className="hover:text-primary">mait@mait.ac.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                    <h3 className="font-semibold text-foreground">Website</h3>
                    <a href="https://mait.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">https://mait.ac.in/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
