'use server';

// Imports:
import prisma from '@/lib/prisma';
import { createFormSchema, createFormSchemaType } from '@/schemas/create-form';

export async function CreateForm(data: createFormSchemaType) {
  const validation = createFormSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      name,
      description,
    },
  });

  if (!form) {
    throw new Error('Failed to create form');
  }

  return form.id;
}

export async function GetForms() {
  return (
    (await prisma?.form?.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })) ?? []
  );
}

export async function GetFormById(id: number) {
  return await prisma.form.findUnique({
    where: {
      id,
    },
  });
}
