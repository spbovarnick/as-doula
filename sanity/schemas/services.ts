import { defineType, defineField } from "sanity"

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      description: 'The name of the service'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})