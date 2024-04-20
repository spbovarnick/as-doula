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
      _updatedAt: string;
      uploadId: string;
      mimeType: string;
      assetId: string;
      _createdAt: string;
      metadata: object;
      originalFilename: string;
      _type: string;
      extension: string;
      _id: string;
      path: string;
      _rev: string;
      url: string;
    };
    _type: "image";
    alt: string;
  };
}