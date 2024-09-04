'use client';

import { createMessage } from "../lib/actions";
import { FormSubmitBtn } from "./FormSubmitBtn";
import { useFormState } from "react-dom";
import { EMPTY_FORM_STATE } from "../lib/formUtils";
import { FieldError } from "./FieldError";
import { useEffect, useState, useRef } from "react";
import toast  from "react-hot-toast";
import { useToastMessage } from "@/hooks/useToastMessage";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const ContactForm = () => {
  const [formState, action] = useFormState(
    createMessage,
    EMPTY_FORM_STATE
  );
  const [phone, setPhone] = useState();
  const [dueDate, setDueDate] = useState(new Date())
  const formRef = useRef<HTMLFormElement>(null);

  const noScriptFallback = useToastMessage(formState);

  const handleSubmitForm = async (formData: FormData) => {
    await action(formData);

    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <form
      action={handleSubmitForm}
      ref={formRef}
      className="flex flex-col gap-y-2"
    >
      <label htmlFor="firstName">
        First Name
      </label>
      <input
        id="firstName"
        name="firstName"
        className="border-2"
        required
      />
      <FieldError formState={formState} name="firstName" />

      <label htmlFor="lastName">
        Last Name
      </label>
      <input
        id="lastName"
        name="lastName"
        className="border-2"
        required
      />
      <FieldError formState={formState} name="lastName" />

      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        className="border-2"
        type="email"
        required
      />
      <FieldError formState={formState} name="email" />

      <label htmlFor="phoneNumber">
        Phone Number
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        country="US"
        defaultCountry="US"
        maxLength={14}
        id="phoneNumber"
        name="phoneNumber"
        className="border-2"
      />
      <FieldError formState={formState} name="phoneNumber" />

      <label htmlFor="dueDate">
        Estimated Due Date
      </label>
      <DatePicker
        showIcon
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        id="dueDate"
        name="dueDate"
        closeOnScroll={true}
        minDate={new Date()}
        className="border-2"
        dateFormat={"yyyy-MM-dd"}
      />
      <FieldError formState={formState} name="dueDate" />

      <label htmlFor="zipCode">
        Zip Code
      </label>
      <input
        id="zipCode"
        name="zipCode"
        className="border-2"
        minLength={5}
        maxLength={5}
        pattern="\d*"
        required
      />
      <FieldError formState={formState} name="zipCode" />
      <span className="text-xs text-red-400">
        {formState.fieldErrors['zipCode']?.[0]}
      </span>

      <label htmlFor="location">
        Birthing Location
      </label>
      <input
        id="location"
        name="location"
        className="border-2"
      />

      <fieldset>
        <legend>What services are you interested in?</legend>
        <input
          type="checkbox"
          id="birthDoula"
          name="birthDoula"
        />
        <label htmlFor="birthDoula">Birth Doula</label>

        <input
          type="checkbox"
          id="postpartumDoula"
          name="postpartumDoula"
        />
        <label htmlFor="postpartumDoula">Postpartum Doula</label>

        <input
          type="checkbox"
          id="siblingSupport"
          name="siblingSupport"
        />
        <label htmlFor="siblingSupport">Sibling Support</label>
      </fieldset>

      <label htmlFor="addDetails">Please share any additional details that may be helpful:</label>
      <textarea
        id="addDetails"
        name="addDetails"
      />

      <FormSubmitBtn
        label="Submit"
        loading="Submitting..."
      />

      <span className="font-bold">
        {formState.message}
      </span>

      {noScriptFallback}
    </form>
  )
}

export { ContactForm };