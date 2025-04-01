'use client';

// Imports:
import { TextIcon } from 'lucide-react';
import { ElementsType, FormElement } from '../specific/form-elements';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text Field',
      placeholder: 'Enter your text here',
      helperText: 'Helper Text',
      required: false,
    },
  }),

  designerBtnElement: {
    label: 'Text Field',
    icon: <TextIcon className="size-8 text-primary cursor-grab" />,
  },
};
