import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client_name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    })
  ]
})