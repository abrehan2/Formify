// Imports
import { GetForms } from '@/actions/form';
import { Suspense } from 'react';
import FormCards from '../resource/form-resource';
import FormCardSkeleton from './form-card-skeletion';

export default async function FormCardSuspenseWrapper() {
  const forms = await GetForms();

  return (
    <Suspense
      fallback={Array.from({ length: forms.length }).map((_, i) => (
        <FormCardSkeleton key={i} />
      ))}
    >
      <FormCards />
    </Suspense>
  );
}
