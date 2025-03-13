// Imports:
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@prisma/client';
import { formatDistance } from 'date-fns';
import { Pen } from 'lucide-react';
import Link from 'next/link';

export function FormCard({ form }: { form: Form }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant="destructive">Draft</Badge>}
        </CardTitle>
        <CardDescription>
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-5 truncate text-sm text-muted-foreground">
        {form.description || 'No description'}
      </CardContent>
      <CardFooter>
        {!form.published && (
          <Button asChild className="mt-2 ml-auto gap-4 text-md" size={'icon'}>
            <Link href={`/builder/${form.id}`}>
              <Pen className="size-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
