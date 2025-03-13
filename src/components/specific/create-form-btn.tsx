'use client';

// Imports:
import { CreateForm } from '@/actions/form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateForm } from '@/contexts/create-form-context';
import {
  createFormSchemaKeys,
  createFormSchemaType,
} from '@/schemas/create-form';
import { FilePlus, LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Textarea } from '../ui/textarea';

export default function CreateFormBtn() {
  const { formHook } = useCreateForm();
  const router = useRouter();

  async function submitHandler(data: createFormSchemaType) {
    try {
      const formId = await CreateForm(data);
      toast.success('Form created successfully.');
      router.push(`/builder/${formId}`);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4"
        >
          <FilePlus className="size-8 text-muted-foreground group-hover:text-primary" />

          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">
            Create a new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New form</DialogTitle>
          <DialogDescription>
            Create a new form to collect responses.
          </DialogDescription>
        </DialogHeader>
        <Form {...formHook}>
          <form className="space-y-3">
            <FormField
              control={formHook.control}
              name={createFormSchemaKeys['NAME']}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formHook.control}
              name={createFormSchemaKeys['DESCRIPTION']}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            disabled={!formHook.formState.isValid}
            onClick={formHook.handleSubmit(submitHandler)}
          >
            {!formHook.formState.isSubmitting && 'Save'}
            {formHook.formState.isSubmitting && (
              <LoaderCircle className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
