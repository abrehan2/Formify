// Imports:
import { GetFormById } from '@/actions/form';
import FormBuilder from '@/components/specific/form-builder';
import { toast } from 'sonner';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const form = await GetFormById(Number(params.id));

  if (!form) {
    toast.error('Form not found');
    return null;
  }

  return <FormBuilder form={form} />;
}
