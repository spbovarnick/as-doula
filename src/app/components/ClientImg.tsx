"use client";

import { ImageObject } from '../lib/types';
import { client } from '../../../sanity/lib/client'
import { useNextSanityImage } from "next-sanity-image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

interface ClientImageProps {
  img: ImageObject;
  sizes?: string;
  classes?: string;
}

export default function ClientImage({ img, sizes, classes }: ClientImageProps) {
  const imageProps = useNextSanityImage(client, img)

  return (
    <Image
      {...imageProps}
      alt={img.alt}
      sizes={sizes}
      className={classes}
      quality={100}
    />
  )
}