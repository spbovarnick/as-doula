import { PortableTextBlock } from "sanity";

interface Slug {
  slug: string,
  current: string,
}

export interface ServiceNavQueryResponse {
  serviceName?: string;
  slug: Slug;
  _id: string;
}

export interface ServicesQueryResponse extends ServiceNavQueryResponse {
  description: PortableTextBlock[],
}

export interface LandingBlurbQueryResponse {
  copy: PortableTextBlock[],
  headshot: ImageObject,
  headline: string,
}

export interface TestimonialQueryResponse {
  testimonial: string;
  _id: string;
  client_name: string;
}

export interface ImageObject {
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
}

export interface AboutQueryResponse {
  copy: PortableTextBlock[];
  headline: string;
  headshot: ImageObject;
}

export interface PhilosophyQueryResponse {
  philosophy: PortableTextBlock[],
  _id: string,
}

export type FormValues = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  dueDate: string,
  zipCode: string,
  location?: string | undefined,
  birthDoula?: string | null | undefined,
  postpartumDoula?: string | null | undefined,
  siblingSupport?: string | null | undefined,
  addDetails?: string | undefined | null,
}