import Image from "next/image";
import { sanityFetch } from "../lib/sanityFetch";
import { AboutQueryResponse } from "../lib/types";
import { aboutQuery } from "../lib/queries";
import ClientImage from "../components/ClientImg";
import { Portrait } from "../components/Icons";
import { PortableText } from "@portabletext/react";
import CtaButton from "../components/CtaButton";
import { libre_baskerville } from "../fonts";

export default async function About(){
  const content: AboutQueryResponse = await sanityFetch<AboutQueryResponse>({
    query: aboutQuery,
    tags: ["about"]
  });

  return (
    <>
    <div className={`pb-5 text-2xl ${libre_baskerville.className} text-center`}>About Annie</div>
    <div className="grid grid-cols-2 gap-4">
      { content?.headshot?.asset?.url ?
        <ClientImage
          img={content.headshot}
          classes={"hidden md:block w-full h-auto object-contain rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl"}
          sizes={"(max-width: 1024px) 100vw, 50vw"}
        /> :
        <Portrait />
      }
      <div className="pb-5">
          <div className={`text-xl italic text-gray-500 pb-3 ${libre_baskerville.className}`}>{content?.headline}</div>
        <PortableText value={content?.copy} />
      </div>
    </div>
    <div className="w-full flex justify-center p-5">
      <CtaButton link="/contact" text="Contact" />
    </div>
    </>
  )
}