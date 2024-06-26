import { PhilosophyQueryResponse, ServicesQueryResponse } from "../lib/types"
import { sanityFetch } from "../lib/sanityFetch"
import { philosophyQuery, servicesQuery } from "../lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Services(){
  const services: ServicesQueryResponse = await sanityFetch<ServicesQueryResponse>({
    query: servicesQuery,
    tags: ["service"]
  });

  const philosophy: PhilosophyQueryResponse = await sanityFetch<PhilosophyQueryResponse>({
    query: philosophyQuery,
    tags: ["servicePhilosophy"]
  });

  return (
    <div>
      <div className="font-libre_baskerville">Philosophy</div>
    </div>
  )
}