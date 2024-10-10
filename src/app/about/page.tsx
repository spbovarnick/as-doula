import Image from "next/image";
import { sanityFetch } from "../lib/sanityFetch";
import { AboutQueryResponse } from "../lib/types";
import { aboutQuery } from "../lib/queries";
import ClientImage from "../components/ClientImg";
import { Portrait } from "../components/Icons";
import { PortableText } from "@portabletext/react";
import ContactButton from "../components/ContactButton";

export default async function About(){
  const content: AboutQueryResponse = await sanityFetch<AboutQueryResponse>({
    query: aboutQuery,
    tags: ["about"]
  });

  return (
    <>
    <div className="">
      <div className="pb-5 text-2xl font-libre_baskerville">About Annie</div>
      <div className="pb-5">
        <div className="text-xl italic text-gray-500 pb-3">{content?.headline}</div>
        <PortableText value={content?.copy} />
      </div>
      { content?.headshot?.asset?.url ?
        <ClientImage
          img={content.headshot}
          classes={"w-full h-auto object-contain rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl"}
          sizes={"(max-width: 1024px) 100vw, 50vw"}
        /> :
        <Portrait />
      }
    </div>
    <ContactButton />
    </>
  )
}