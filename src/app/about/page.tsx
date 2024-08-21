import Image from "next/image";
import { sanityFetch } from "../lib/sanityFetch";
import { AboutQueryResponse } from "../lib/types";
import { aboutQuery } from "../lib/queries";
import ClientImage from "../components/ClientImg";
import { Portrait } from "../components/Icons";

export default async function About(){
  const content: AboutQueryResponse = await sanityFetch<AboutQueryResponse>({
    query: aboutQuery,
    tags: ["about"]
  });


  return (
    <>
    { content.headshot?.asset?.url &&
    <div className="">
      <ClientImage
        img={content.headshot}
        classes={"w-full h-auto object-contain"}
        sizes={"(max-width: 1024px) 100vw, 50vw"}
      />
    </div>
    }
    </>
  )
}