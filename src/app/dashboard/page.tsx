'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { alumni, events, updateRequests as initialUpdateRequests } from '@/lib/mock-data';
import type { ProfileUpdateRequest } from '@/lib/types';
import { Users, Calendar, Edit, Check, X } from 'lucide-react';

export default function DashboardPage() {
  const [updateRequests, setUpdateRequests] = useState<ProfileUpdateRequest[]>(initialUpdateRequests);

  const handleValidation = (id: number, approved: boolean) => {
    setUpdateRequests(prev => prev.filter(req => req.id !== id));
    toast({
      title: `Request ${approved ? 'Approved' : 'Rejected'}`,
      description: `The profile update has been ${approved ? 'applied' : 'discarded'}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{alumni.length}</div>
            <p className="text-xs text-muted-foreground">+2 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground">1 new event scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Validations</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{updateRequests.length}</div>
            <p className="text-xs text-muted-foreground">Updates awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Validation Dashboard</CardTitle>
          <p className="text-muted-foreground">Review and validate profile updates submitted by alumni.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alumnus</TableHead>
                <TableHead>Field</TableHead>
                <TableHead>Old Value</TableHead>
                <TableHead>New Value</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updateRequests.length > 0 ? (
                updateRequests.map(request => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.alumnusName}</TableCell>
                    <TableCell><Badge variant="secondary">{request.fieldName}</Badge></TableCell>
                    <TableCell className="text-muted-foreground">{request.oldValue}</TableCell>
                    <TableCell className="text-foreground font-semibold">{request.newValue}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleValidation(request.id, true)}>
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleValidation(request.id, false)}>
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No pending validations.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
