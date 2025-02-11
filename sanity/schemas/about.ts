import { defineType, defineField } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{type: "block"}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().assetRequired(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "This text is used for optimize accessibility",
          validation: (rule) => rule.required(),
        })
      ]
    })
  ]
})