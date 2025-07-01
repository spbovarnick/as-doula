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
      description: 'The name of the service',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This value will be used to link from the nav menu',
      options: {
        source: 'serviceName',
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-'),
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'buttonScript',
      title: 'Button Script',
      type: 'image',
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "This text is used to optimize accessibility; just use the service name",
          validation: (rule) => rule.required(),
        })
      ]
    })
  ]
})