export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-29';

export const dataset = process.env.NODE_ENV === "development" ? assertValue(
  process.env.NEXT_PUBLIC_SANITY_DEV_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DEV_DATASET'
) : assertValue(process.env.NEXT_PUBLIC_SANITY_PROD_DATASET, 'Missing environment variable: NEXT_PUBLIC_SANITY_PROD_DATASET');

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn = false;

export const token = assertValue(process.env.NEXT_PUBLIC_EDITOR_TOKEN, "Missing environment variable:NEXT_PUBLIC_EDITOR_TOKEN");

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
