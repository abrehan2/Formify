import { formElements } from './form-elements';
import SidebarBtn from './sidebar-btn';

export default function DesignerSidebar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-4 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      Elements
      <SidebarBtn formElement={formElements.TextField} />
    </aside>
  );
}
