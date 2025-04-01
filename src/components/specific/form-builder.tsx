'use client';

// Imports:
import { DndContext } from '@dnd-kit/core';
import { Form } from '@prisma/client';
import Designer from './designer';
import DragOverlayWrapper from './drag-overlay-wrapper';
import PreviewDialogBtn from './preview-dialog-btn';
import PublishFormBtn from './publish-form-btn';
import SaveButtonForm from './save-form-button';

export default function FormBuilder({ form }: { form: Form }) {
  return (
    <DndContext>
      <main className="flex flex-col w-full space-y-3 py-3">
        <nav className="flex justify-between pb-3 gap-3 items-center flex-wrap">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-1">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-3">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveButtonForm />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div
          className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent
      bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]"
        >
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}
