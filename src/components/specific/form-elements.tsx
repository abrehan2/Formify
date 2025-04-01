import { TextFieldFormElement } from '../fields/text-field';

export type ElementsType = 'TextField';

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ReactElement;
    label: string;
  };

  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export const formElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
