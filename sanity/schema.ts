import { type SchemaTypeDefinition } from 'sanity'
import  aboutType from './schemas/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutType],
}
