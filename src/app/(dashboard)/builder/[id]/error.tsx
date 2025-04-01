'use client';

// Imports:
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log('ERROR - ', error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center space-y-4">
      <h2 className="bg-gradient-to-r from-indigo-400 to-orange-400 text-transparent bg-clip-text text-4xl text-semibold">
        Something went wrong.
      </h2>
      <Button asChild>
        <Link href={'/'}>Go back to home</Link>
      </Button>
    </div>
  );
}
