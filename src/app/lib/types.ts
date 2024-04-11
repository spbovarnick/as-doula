import { PortableTextBlock } from "sanity";


export interface ServiceNavQueryResponse {
  serviceName?: string;
  slug?: string;
  _id: string;
}

export interface LandingBlurbQueryResponse {
  copy: PortableTextBlock[],
}

export interface TestimonialQueryResponse {
  testimonial: string;
  _id: string;
  client_name: string;
}