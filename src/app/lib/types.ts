import type { PortableTextBlock } from "sanity";

export interface ServiceNavQueryResponse {
  serviceName?: string;
  slug?: string;
  _id: string;
}

export interface LandingBlurbQueryResponse {
  copy: PortableTextBlock[],
}