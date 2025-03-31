'use client';

import { createMessage } from "../lib/actions";
import { FormSubmitBtn } from "./FormSubmitBtn";
import { useFormState } from "react-dom";
import { EMPTY_FORM_STATE } from "../lib/formUtils";
import { FieldError } from "./FieldError";
import { useCallback, useState } from "react";
import { useToastMessage } from "@/hooks/useToastMessage";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useFormReset } from "@/hooks/useFormReset";

const ContactForm = () => {
  const [formState, action] = useFormState(
    createMessage,
    EMPTY_FORM_STATE
  );
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [dueDate, setDueDate] = useState<Date | null>(new Date())
  const noScriptFallback = useToastMessage(formState);

  const handleReset = useCallback(() => {
    setPhone(undefined);
    setDueDate(new Date());
  }, []);

  const formRef = useFormReset(formState, handleReset);

  return (
    <form
      action={action}
      ref={formRef}
      className="gap-y-2 text-xs"
    >

      <div className="fieldDiv">
        <label htmlFor="firstName" className="w-full">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          className="w-[60%] md:w-full"
          required
        />
        <FieldError formState={formState} name="firstName" />
      </div>

      <div className="fieldDiv">
        <label htmlFor="lastName" className="w-full">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          className="w-[60%] md:w-full"
          required
        />
        <FieldError formState={formState} name="lastName" />
      </div>

      <div className="fieldDiv">
        <label htmlFor="email" className="w-full">
          Email
        </label>
        <input
          id="email"
          name="email"
          className="w-full"
          type="email"
          required
        />
        <FieldError formState={formState} name="email" />
      </div>

      <div className="fieldDiv">
        <label htmlFor="phoneNumber" className="w-full">
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
          className="w-[18ch]"
        />
        <FieldError formState={formState} name="phoneNumber" />
      </div>

      <div className="fieldDiv">
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
          className="w-[16ch]"
          dateFormat={"yyyy-MM-dd"}
        />
        <FieldError formState={formState} name="dueDate" />
      </div>

      <div className="fieldDiv">
        <label htmlFor="zipCode">
          Zip Code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          className="w-[10ch]"
          minLength={5}
          maxLength={5}
          pattern="\d*"
          required
        />
        <FieldError formState={formState} name="zipCode" />
        <span className="text-xs text-red-400">
          {formState.fieldErrors['zipCode']?.[0]}
        </span>
      </div>

      <div className="fieldDiv">
        <label htmlFor="location" className="flex justify-between w-full">
          <span>Birthing Location</span> <span>(optional)</span>
        </label>
        <input
          id="location"
          name="location"
          className="w-full"
        />
      </div>

      <fieldset className="fieldDiv p-0 gap-y-2">
        <legend className="pb-2">What services are you interested in?</legend>
        <div>
          <input
            type="checkbox"
            id="birthDoula"
            name="birthDoula"
            className="mr-1"
          />
          <label htmlFor="birthDoula">Birth Doula</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="postpartumDoula"
            name="postpartumDoula"
            className="mr-1"
          />
          <label htmlFor="postpartumDoula">Postpartum Doula</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="siblingSupport"
            name="siblingSupport"
            className="mr-1"
          />
          <label htmlFor="siblingSupport">Sibling Support</label>
        </div>
      </fieldset>

      <div className="fieldDiv">
        <label htmlFor="addDetails">Please share any additional details that may be helpful:</label>
        <textarea
          id="addDetails"
          name="addDetails"
          className=""
        />
      </div>

      <div className="w-full flex justify-center">
        <FormSubmitBtn
          label="Submit"
          loading="Submitting..."
        />
      </div>

      <span className="font-bold">
        {formState.message}
      </span>

      {noScriptFallback}
    </form>
  )
}

export { ContactForm };