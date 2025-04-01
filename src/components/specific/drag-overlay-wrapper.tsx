// Imports:
import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { ElementsType, formElements } from './form-elements';
import { SidebarBtnDragOverlay } from './sidebar-btn';

export default function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart(event) {
      setDraggedItem(event.active);
    },
    onDragCancel() {
      setDraggedItem(null);
    },
    onDragEnd() {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay wrapper</div>;
  const isSidebarBtnEl = draggedItem?.data?.current?.isDesignerBtn;

  if (isSidebarBtnEl) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarBtnDragOverlay formElement={formElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}
