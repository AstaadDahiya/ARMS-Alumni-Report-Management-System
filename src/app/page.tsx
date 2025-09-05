import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Users, Bot, Calendar } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">ARMS</h1>
          </Link>
          <Button asChild variant="outline">
            <Link href="/dashboard">Login</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-foreground tracking-tight">
              Connect, Grow, and Succeed with Your Alumni Network
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              ARMS (Alumni Report Management System) is your all-in-one platform to leverage the power of your alumni community.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/dashboard">Explore the Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground">Powerful Features for Your Institution</h3>
              <p className="text-muted-foreground mt-2">Everything you need to manage and engage your alumni.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Users className="h-8 w-8 text-accent" />}
                title="Alumni Directory"
                description="A secure and searchable directory of alumni profiles."
              />
              <FeatureCard
                icon={<Bot className="h-8 w-8 text-accent" />}
                title="AI Career Guidance"
                description="An AI chatbot providing career advice based on real alumni data."
              />
              <FeatureCard
                icon={<Briefcase className="h-8 w-8 text-accent" />}
                title="Verified Talent Pool"
                description="A talent pool for recruiters to find passive candidates."
              />
              <FeatureCard
                icon={<Calendar className="h-8 w-8 text-accent" />}
                title="Event Organization"
                description="Tools to organize reunions, webinars, and mentorship programs."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ARMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center border-none shadow-lg bg-background">
      <CardHeader>
        <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
          {icon}
        </div>
        <CardTitle className="mt-4 font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
