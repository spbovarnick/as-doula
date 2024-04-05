import { groq } from "next-sanity"
import type { PortableTextBlock, Image } from "sanity"

export const servicesNavQuery = groq`*[_type == "service"]{
  serviceName,
  "slug": slug.current,
  _id
}`;
