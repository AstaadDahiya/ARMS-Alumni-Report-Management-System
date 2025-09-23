
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl">Welcome to the Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">Please navigate to your designated dashboard using the sidebar.</p>
                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/dashboard/admin">Go to Admin Dashboard</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
