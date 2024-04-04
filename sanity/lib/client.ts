import { createClient, type ClientConfig } from '@sanity/client'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  useCdn: useCdn,
  apiVersion: apiVersion,
  token: token,
  perspective: 'published',
}

export const client = createClient(config)
