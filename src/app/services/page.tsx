import { PhilosophyQueryResponse, ServicesQueryResponse } from "../lib/types"
import { sanityFetch } from "../lib/sanityFetch"
import { philosophyQuery, servicesQuery } from "../lib/queries";
import { PortableText } from "@portabletext/react";
import ServiceSection from "../components/Service";
import CtaButton from "../components/CtaButton";
import { libre_baskerville } from "../fonts";

export default async function Services(){
  const services: ServicesQueryResponse[] = await sanityFetch<ServicesQueryResponse[]>({
    query: servicesQuery,
    tags: ["service"]
  });

  const philosophy: PhilosophyQueryResponse = await sanityFetch<PhilosophyQueryResponse>({
    query: philosophyQuery,
    tags: ["servicePhilosophy"]
  });

  return (
    <div className="">
      <div className={`text-2xl ${libre_baskerville.className} pb-5`}>Philosophy</div>
      <div className={`${libre_baskerville.className} text-xs mb-5`}>
        <PortableText
          value={philosophy?.philosophy}
        />
      </div>
      {services?.map((service) => (
        <ServiceSection key={service._id} service={service} />
      ))}
      <div className="flex justify-center pb-5">
        <CtaButton link="/contact" text="Contact" src="/buttons/contact.png" />
      </div>
    </div>
  )
}