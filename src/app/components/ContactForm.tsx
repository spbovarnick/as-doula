'use client';

import { createMessage } from "../lib/actions";
import { FormSubmitBtn } from "./FormSubmitBtn";
import { useFormState } from "react-dom";
import { EMPTY_FORM_STATE } from "../lib/formUtils";
import { FieldError } from "./FieldError";
import { useEffect } from "react";
import toast  from "react-hot-toast";

const ContactForm = () => {
  const [formState, action] = useFormState(
    createMessage,
    EMPTY_FORM_STATE
  );

  useEffect(() => {
    if (formState.message) {
      if (formState.status === "ERROR") {
        toast.error(formState.message);
      } else {
        toast.success(formState.message);
      }
    }
  }, [formState.status, formState.message]);

  return (
    <form
      action={action}
      className="flex flex-col gap-y-2"
    >
      <label htmlFor="title">
        Title
      </label>
      <input id="title" name="title" className="border-2" />
      <FieldError formState={formState} name="title" />

      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        name="text"
        className="border-2"
      />
      <FieldError formState={formState} name="text" />

      <FormSubmitBtn
        label="Submit"
        loading="Submitting..."
      />

      <span className="font-bold">
        {formState.message}
      </span>
    </form>
  )
}

export { ContactForm };