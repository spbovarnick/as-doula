import { defineType, defineField } from "sanity";

export default defineType({
  name: "landingBlurb",
  title: "Landing Blurb",
  type: "document",
  fields: [
    defineField({
      name: "headshot",
      title: "Headshot",
      description: "This headshot will appear in the homepage hero.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().assetRequired(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "This text is used for optimize accessibility",
          validation: (rule) => rule.required(),
        })
      ]
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "A sentence or two about how great Annie is. This will help break up all the text here",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{type: "block"}],
      validation: (rule) => rule.required(),
    })
  ]
})