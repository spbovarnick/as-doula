import Image from "next/image"
import { ContactForm } from "../components/ContactForm"
import { libre_baskerville } from "../fonts"

export default function Contact() {
  return (
    <div className="w-full grid grid-flow-col grid-cols-2">
      <Image
        src={'/nest.svg'}
        width={500}
        height={500}
        alt="bird and nest"
        className="h-full"
      />
      <div>
        <div className={`${libre_baskerville.className} text-2xl mb-5`}>
          Contact
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  )
}