"use client";

import { ImageObject } from '../lib/types';
import { client } from '../../../sanity/lib/client'
import { useNextSanityImage } from "next-sanity-image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";
import { Suspense } from 'react';

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

interface ClientImageProps {
  img: ImageObject;
  sizes?: string;
  classes?: string;
  alt?: string
}

export default function ClientImage({ img, sizes, classes, alt }: ClientImageProps) {
  const imageProps = useNextSanityImage(client, img)

  return (
    <Suspense>
    <Image
      {...imageProps}
      alt={alt ?? "Image" }
      sizes={sizes}
      className={classes}
      quality={100}
    />
    </Suspense>
  )
}