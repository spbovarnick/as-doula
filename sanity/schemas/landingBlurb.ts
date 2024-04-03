import { defineType, defineField } from "sanity";

export default defineType({
  name: "landingBlurb",
  title: "Landing Blurb",
  type: "document",
  fields: [
    defineField({
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{type: "block"}]
    })
  ]
})