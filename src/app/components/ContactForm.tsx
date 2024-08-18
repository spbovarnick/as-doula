"use client";

import { useForm, SubmitHandler} from "react-hook-form";
import sendForm from "@/utils/api/sendForm";
import { FormValues } from "../lib/types";
import { useRef, useTransition } from "react";

const ContactForm = () => {
  const { register, handleSubmit, } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // sendForm(data);
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      })

      if (response.ok) {
        alert("Form submitted successfully!")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form")
    }
  }

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   console.log(formData)

  //   formData.append("access_key", "41633f7d-1aa0-4576-b327-7e2b4d9cac8b");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   });
  //   const result = await response.json();
  //   if (result.success) {
  //     console.log(result);
  //   }
  // }

  return (
    <>
      <form
        // onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          name="name"
          className="border-2 border-rose-500"
          />
        <input
          {...register("email")}
          type="email"
          name="email"
          className="border-2 border-rose-500"
          />
        <textarea
          {...register("message")}
          name="message"
          className="border-2 border-rose-500"
        />

        <input type="submit" />
        {/* <button type="submit">Submit Form</button> */}
      </form>
    </>
  );
}

export default ContactForm;