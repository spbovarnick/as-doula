import { PhilosophyQueryResponse, ServicesQueryResponse } from "../lib/types"
import { sanityFetch } from "../lib/sanityFetch"
import { philosophyQuery, servicesQuery } from "../lib/queries";
import { PortableText } from "@portabletext/react";
import ServiceSection from "../components/Service";

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
    <div className="px-5 pt-11 pb-5">
      <div className="pb-5 text-2xl font-libre_baskerville">Philosophy</div>
      <div className="font-libre_baskerville text-xs px-4 mb-4">
        <PortableText
          value={philosophy?.philosophy}
        />
      </div>
      {services?.map((service) => (
        <ServiceSection key={service._id} service={service} />
      ))}


    </div>
  )
}