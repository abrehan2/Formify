import { cn } from '@/lib/utils';
import { useDraggable } from '@dnd-kit/core';
import { Button } from '../ui/button';
import { FormElement } from './form-elements';

export default function SidebarBtn({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtn: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant={'outline'}
      className={cn(
        'flex flex-col gap-2 size-[120px] cursor-grab',
        draggable.isDragging && 'ring-2 ring-primary'
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      {icon}
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export function SidebarBtnDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon } = formElement.designerBtnElement;

  return (
    <Button
      variant={'outline'}
      className="flex flex-col gap-2 size-[120px] cursor-grab"
    >
      {icon}
      <p className="text-xs">{label}</p>
    </Button>
  );
}
