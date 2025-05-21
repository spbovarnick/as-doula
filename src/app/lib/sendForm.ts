"use server";

import { FormValues } from "@/app/lib/types";

import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});


const sendForm = async (data: FormValues) => {

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });
    const client = await transporter.sendMail({
      to: data.email,
      from: process.env.EMAIL,
      subject: `Confirming your request for care, ${data.firstName}`,
      html: `
          <style>
            body {
              font-family
            }
          </style>
          <body>
            <p>Hi ${data.firstName},</p>
            <p>Thank you for reaching out about my services. This email is just a confirmation that I'll be in touch after reviewing your form.</p>
            <br/>
            <br/>
            <p>Sincerely,</p>
            <br/>
            <p>Annie Scott</p>
          </body>
          `
    })

    const self = await transporter.sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `${data.firstName} ${data.lastName} seeking service`,
      html: `


            <style>
              table {
                border-collapse: collapse;
              }
              td, th {
                border: 1px solid black;
                padding: 0.5rem;
                text-align: left;
              }
              ul {
                padding-left: none;
              }
              td {
                padding-left: .5rem
              }
            </style>
            <head>
              <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
            </head>
            <body style="display: block; margin: auto;">
              <table>
                <tr>
                  <th>Name:</th>
                  <td>${data.firstName, " ", data.lastName}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td>${data.phoneNumber}</td>
                </tr>
                <tr>
                  <th>Estimated Due Date:</th>
                  <td>${data.dueDate}</td>
                </tr>
                <tr>
                  <th>Zip Code:</th>
                  <td>${data.zipCode}</td>
                </tr>
                <tr>
                  <th>Birth Location:</th>
                  <td>${data.location ? data.location : "n/a"}</td>
                </tr>
                <tr>
                  <th>Services Requested:</th>
                  <td>
                    <ul>
                      ${data.birthDoula ? "<li>Birth Doula</li>" : ""}
                      ${data.siblingSupport ? "<li>Sibling Support</li>" : ""}
                      ${data.postpartumDoula ? "<li>Postpartum Doula</li>" : ""}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Additional Details:</th>
                  <td>${data.addDetails ? data.addDetails : "None"}</td>
                </tr>
              </table>
            </body>

          `,
    })
    return { client, self }
  } catch (error) {
    console.error('Something went wrong', error);
  }
}

export default sendForm