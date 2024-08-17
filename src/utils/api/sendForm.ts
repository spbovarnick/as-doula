"use server"
import { FormValues } from "@/app/lib/types";



const sendForm = async (data: FormValues) => {
  const apiEndpoint = '/api/contact';

  console.log(data)

  fetch(apiEndpoint)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })

  // fetch(apiEndpoint, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     alert(response.message);
  //   })
  //   .catch((err) => {
  //     alert(err)
  //   })

  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
  // const msg = {
  //   to: 'test@example.com', // Change to your recipient
  //   from: 'test@example.com', // Change to your verified sender
  //   subject: 'Sending with SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // }
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error:any) => {
  //     console.error(error)
  //   })

}

export default sendForm