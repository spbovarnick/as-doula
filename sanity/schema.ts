import { type SchemaTypeDefinition } from 'sanity'
import  about from './schemas/about'
import landingBlurb from './schemas/landingBlurb'
import service from './schemas/service'
import testimonial from './schemas/testimonial'
import servicePhilosophy from './schemas/servicePhilosophy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, landingBlurb, testimonial, service, servicePhilosophy],
}
