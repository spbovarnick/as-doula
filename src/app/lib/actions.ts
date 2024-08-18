'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { fromErrorToFormState, toFormState } from "./formUtils";

const createIntakeSchema = z.object({
  title: z.string().min(1).max(191),
  text: z.string().min(1).max(191),
})

type Message = {
  id: string;
  text: string;
}

let messages: Message[] = [
  {
    id: crypto.randomUUID(),
    text: 'First Msg',
  },
  {
    id: crypto.randomUUID(),
    text: 'Second Msg',
  },
  {
    id: crypto.randomUUID(),
    text: 'Third Msg',
  }
];

export const getMessages = async (): Promise<Message[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  return Promise.resolve(messages);
}

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
      title: formData.get('title'),
      text: formData.get('text'),
    });

    messages.push({
      id: crypto.randomUUID(),
      ...data,
    });
  } catch (error) {
    return  fromErrorToFormState(error);
  }

  revalidatePath('/contact');

  return toFormState('SUCCESS', 'Intake submitted!');
}