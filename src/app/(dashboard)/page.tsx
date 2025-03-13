// Imports:
import CreateFormBtn from '@/components/specific/create-form-btn';
import FormCardSuspenseWrapper from '@/components/specific/form-suspense-wrapper';
import { CreateFormProvider } from '@/contexts/create-form-context';

export default function Home() {
  return (
    <div className="w-full pt-5 space-y-5">
      <CreateFormProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CreateFormBtn />
          <FormCardSuspenseWrapper />
        </div>
      </CreateFormProvider>
    </div>
  );
}
