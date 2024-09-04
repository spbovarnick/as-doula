'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { fromErrorToFormState, toFormState } from "./formUtils";
import sendForm from "./sendForm";

const REG = /^[0-9]{5}/

const createIntakeSchema = z.object({
  firstName: z.string().min(1).max(191),
  lastName: z.string().min(1).max(191),
  email: z.string().min(1).max(191).email(),
  phoneNumber: z.string().min(12).max(12),
  dueDate: z.string().date(),
  zipCode: z.string().min(5).max(5).regex(REG, "Zip code must be five numerals"),
  location: z.string().optional(),
  birthDoula: z.string().nullable(),
  postpartumDoula: z.string().nullable(),
  siblingSupport: z.string().nullable(),
  addDetails: z.string().nullable().optional(),
})

type FormState = {
  message: string;
};

export const createMessage = async (
  formState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const data = createIntakeSchema.parse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      dueDate: formData.get('dueDate'),
      zipCode: formData.get('zipCode'),
      location: formData.get('location'),
      birthDoula: formData.get('birthDoula'),
      postpartumDoula: formData.get('postpartumDoula'),
      siblingSupport: formData.get('siblingSupport'),
      addDetails: formData.get('addDetails'),
    });

    sendForm(data);

  } catch (error) {
    return  fromErrorToFormState(error);
  }

  revalidatePath('/contact');

  return toFormState('SUCCESS', 'Intake submitted!');
}