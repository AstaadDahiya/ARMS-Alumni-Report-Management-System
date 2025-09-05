
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { news } from '@/lib/mock-data';
import { PlusCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function NewsAndUpdatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">News and Updates</h1>
          <p className="text-muted-foreground">Stay informed with the latest from our community.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post Article
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map(article => (
          <Card key={article.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
               <Image
                src={article.imageUrl}
                alt={article.title}
                width={600}
                height={400}
                className="object-cover aspect-[3/2]"
                data-ai-hint="article photo"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow space-y-3">
               <Badge variant={
                   article.category === 'Alumni Achievement' ? 'default' :
                   article.category === 'Campus News' ? 'secondary' :
                   'outline'
               }>{article.category}</Badge>
              <CardTitle className="text-xl">{article.title}</CardTitle>
               <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
              </div>
              <p className="text-muted-foreground pt-2 text-base">{article.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
