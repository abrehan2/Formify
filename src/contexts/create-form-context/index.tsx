'use client';

// IMPORTS -
import {
  createFormSchema,
  createFormSchemaKeys,
  createFormSchemaType,
} from '@/schemas/create-form';
import { TChildren } from '@/types/general';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export const CreateFormProvider = ({ children }: TChildren) => {
  const formHook = useForm<createFormSchemaType>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      [createFormSchemaKeys.NAME]: undefined,
      [createFormSchemaKeys.DESCRIPTION]: undefined,
    },
    mode: 'onChange',
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useCreateForm = () => {
  const formHook = useFormContext<createFormSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
