import { sanityFetch } from "../lib/sanityFetch";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../../sanity/lib/client";
import { AboutQueryResponse } from "../lib/types";
import { aboutQuery } from "../lib/queries";

export default async function About(){
  const content: AboutQueryResponse = await sanityFetch<AboutQueryResponse>({
    query: aboutQuery,
    tags: ["about"]
  });
  const imageProps = useNextSanityImage(client, content.headshot);

  console.log(content.headshot.asset?.metadata)

  return (
    <>
    { content.headshot.asset?.url &&
    <Image
      {...imageProps}
      alt={content.headshot.alt}
      style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
      sizes="(max-width: 800px) 100vw, 800px"
      // placeholder="blur"
      // blurDataURL={content.headshot.asset.metadata.lqip}
    />}
    </>
  )
}