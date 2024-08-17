// type ResponseData = {
//   message: string
// }

// export async function GET() {
//   const res = await
//   console.log('Data', req.body)

//   res.status(200).json({ message: 'Hello from Next.js!' })
// }


import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function POST(
  request: NextApiRequest,
  response: NextApiResponse ) {
  if (request.method === 'POST') {
    console.log('Received POST request');
    const { name, email, message } = request.body

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
      }
    })

    try {
      await transporter.sendMail({
        from: "Client",
        to: "spbovarnick@gmail.com",
        subject: "new intake form",
        text: 'test',
      })

      response.status(200).json({ message: "success" })
    } catch (error) {
      console.error("error sending email:", error)
      response.status(500).json({ message: "Error submitting form" })
    }
  } else {
    // Handle any other HTTP method if necessary
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}