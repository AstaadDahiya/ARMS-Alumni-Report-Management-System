
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mentorshipRequests } from '@/lib/mock-data';
import { CheckCircle, XCircle, Mail, User, Clock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

export default function MentorshipRequestsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mentorship Requests</CardTitle>
        <CardDescription>
          Review and respond to mentorship requests from students.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Mentor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mentorshipRequests.map(request => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.studentName}</TableCell>
                  <TableCell>{request.mentorName}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                   <TableCell>
                    <Badge variant={
                      request.status === 'Pending' ? 'secondary' :
                      request.status === 'Accepted' ? 'default' : 'destructive'
                    }>{request.status}</Badge>
                   </TableCell>
                  <TableCell className="text-right space-x-1">
                     <Dialog>
                        <DialogTrigger asChild>
                             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <Mail className="h-5 w-5" />
                              <span className="sr-only">View Message</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Request from {request.studentName}</DialogTitle>
                                <DialogDescription>
                                    Sent to {request.mentorName} on {request.requestDate}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                               <p className="text-sm text-muted-foreground bg-secondary p-4 rounded-md">{request.message}</p>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="ghost">Close</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700" disabled={request.status !== 'Pending'}>
                      <CheckCircle className="h-5 w-5" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700" disabled={request.status !== 'Pending'}>
                      <XCircle className="h-5 w-5" />
                      <span className="sr-only">Deny</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
