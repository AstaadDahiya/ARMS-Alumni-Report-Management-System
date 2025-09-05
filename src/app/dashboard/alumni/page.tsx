"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { alumni as allAlumni } from '@/lib/mock-data';
import type { Alumnus } from '@/lib/types';
import { Search } from 'lucide-react';

export default function AlumniDirectoryPage() {
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Alumnus, direction: 'asc' | 'desc' } | null>(null);

  const filteredAndSortedAlumni = useMemo(() => {
    let filtered = allAlumni.filter(alumnus =>
      alumnus.name.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.major.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(search.toLowerCase()) ||
      String(alumnus.graduationYear).includes(search)
    );

    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aVal > bVal) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [search, sortConfig]);

  const requestSort = (key: keyof Alumnus) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: keyof Alumnus) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alumni Directory</CardTitle>
        <p className="text-muted-foreground">Search and browse all alumni profiles.</p>
        <div className="relative mt-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name, major, company, or year..." 
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => requestSort('name')} className="cursor-pointer">Name{getSortIndicator('name')}</TableHead>
                <TableHead onClick={() => requestSort('graduationYear')} className="cursor-pointer">Grad Year{getSortIndicator('graduationYear')}</TableHead>
                <TableHead onClick={() => requestSort('major')} className="cursor-pointer">Major{getSortIndicator('major')}</TableHead>
                <TableHead onClick={() => requestSort('company')} className="cursor-pointer">Company{getSortIndicator('company')}</TableHead>
                <TableHead>Job Title</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedAlumni.map(alumnus => (
                <TableRow key={alumnus.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={alumnus.avatarUrl} data-ai-hint="user avatar" />
                        <AvatarFallback>{alumnus.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{alumnus.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{alumnus.graduationYear}</TableCell>
                  <TableCell><Badge variant="outline">{alumnus.major}</Badge></TableCell>
                  <TableCell>{alumnus.company}</TableCell>
                  <TableCell>{alumnus.jobTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
