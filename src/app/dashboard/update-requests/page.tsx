import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { updateRequests } from '@/lib/mock-data';
import { CheckCircle, XCircle } from 'lucide-react';

export default function UpdateRequestsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Update Requests</CardTitle>
        <CardDescription>
          Review and approve or deny requests from alumni to update their profiles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alumnus</TableHead>
                <TableHead>Field</TableHead>
                <TableHead>Old Value</TableHead>
                <TableHead>New Value</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updateRequests.map(request => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.alumnusName}</TableCell>
                  <TableCell>{request.fieldName}</TableCell>
                  <TableCell className="text-muted-foreground">{request.oldValue}</TableCell>
                  <TableCell className="text-primary">{request.newValue}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                      <CheckCircle className="h-5 w-5" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
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
