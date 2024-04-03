import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams
} from "next-sanity";
import {
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn,
} from "../../../sanity/env";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  try {
    return client.fetch<QueryResponse>(query, qParams || {}, {
      cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
      next: { tags },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}