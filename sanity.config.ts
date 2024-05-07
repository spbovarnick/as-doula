/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["landingBlurb", "about", "servicePhilosophy"])

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Landing Blurb")
            .id("landingBlurb")
            .icon(() => "🏡📝")
            .child(
              S.document()
                .schemaType("landingBlurb")
                .documentId("landingBlurb")
            ),
          S.listItem()
            .title("About")
            .id("about")
            .icon(() => "💁‍♀️")
            .child(
              S.document()
                .schemaType("about")
                .documentId("about")
            ),
          S.listItem()
            .title("Service Philosophy")
            .id("servicePhilosophy")
            .icon(() => "💡")
            .child(
              S.document()
                .schemaType("servicePhilosophy")
                .documentId("servicePhilosophy")
            ),
          S.documentTypeListItem("service").title("Service"),
          S.documentTypeListItem("testimonial").title("Testimonial"),
          // S.documentTypeListItem("landingBlurb").title("Landing Blurb")
        ])
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],

  schema: {
    types: schema.types,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input
  }
})
