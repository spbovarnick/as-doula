import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicePhilosophy",
  title: "Service Philosophy",
  type: "document",
  fields: [
    defineField({
      name: "philosophy",
      title: "Philosophy",
      description: "This copy will appear at the top of your services page",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    })
  ]
})