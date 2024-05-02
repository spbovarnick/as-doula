import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'
import { ImageUrlBuilderOptionsWithAsset } from '@sanity/image-url/lib/types/types'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source)
}
