import { type SchemaTypeDefinition } from 'sanity'
import  about from './schemas/about'
import landingBlurb from './schemas/landingBlurb'
import service from './schemas/service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, landingBlurb, service],
}
