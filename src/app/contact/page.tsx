import Image from "next/image"
import { ContactForm } from "../components/ContactForm"
import { libre_baskerville } from "../fonts"

export default function Contact() {
  return (
    <div className="w-full md:grid md:auto-rows-min md:grid-cols-2">
      <Image
        src={'/flower.svg'}
        width={500}
        height={500}
        alt="bird and nest"
        className="h-full hidden md:block"
      />
      <div className="md:max-h-fit md:h-fit">
        <div className={`${libre_baskerville.className} text-2xl mb-5`}>
          Contact
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  )
}