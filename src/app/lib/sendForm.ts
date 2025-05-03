"use server";

import { FormValues } from "@/app/lib/types";
const sgMail = require('@sendgrid/mail');
const SG_API_KEY = process.env.SG_API_KEY;
sgMail.setApiKey(SG_API_KEY);

const sendForm = async (data: FormValues) => {

    const msgs = [
      {
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
          <p>Annie Smith</p>
        </body>
        `
      },
      {
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
                    ${data.birthDoula ? data.birthDoula : "<li>Birth Doula</li>"}
                    ${data.siblingSupport ? data.siblingSupport : "<li>Sibling Support</li>"}
                    ${data.postpartumDoula ? data.postpartumDoula : "<li>Postpartum Doula</li>"}
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
      }
    ];

    try {
      await sgMail.send(msgs)
    } catch (error: any) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
}

export default sendForm