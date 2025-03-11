// Imports:
import * as z from 'zod';

export enum createFormSchemaKeys {
  NAME = 'name',
  DESCRIPTION = 'description',
}

export const createFormSchema = z
  .object({
    [createFormSchemaKeys.NAME]: z
      .string({
        message: 'Name is required',
      })
      .trim(),

    [createFormSchemaKeys.DESCRIPTION]: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data[createFormSchemaKeys['NAME']] === '') {
        return false;
      }

      return true;
    },
    {
      path: [createFormSchemaKeys['NAME']],
      message: 'Name is required',
    }
  );

export type createFormSchemaType = z.infer<typeof createFormSchema>;
