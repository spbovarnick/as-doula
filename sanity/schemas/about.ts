import { defineType, defineField } from "sanity"

export default defineType({
  name: "about",
  title: "About",
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