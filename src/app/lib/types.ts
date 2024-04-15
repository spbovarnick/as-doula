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

export interface AboutQueryResponse {
  copy: PortableTextBlock[];
  headshot: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
    alt: string;
  };
}