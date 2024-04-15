import { sanityFetch } from "../lib/sanityFetch";
import { AboutQueryResponse } from "../lib/types";
import { aboutQuery } from "../lib/queries";

export default async function About(){
  const content: AboutQueryResponse = await sanityFetch<AboutQueryResponse>({
    query: aboutQuery,
    tags: ["about"]
  })

  console.log(content)

  return (
    <></>
  )
}