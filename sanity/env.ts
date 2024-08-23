export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-29';

const getDataset = () => {
  // const isDevelopment = process.env.NODE_ENV === "development";
  // const envVar = isDevelopment
  //   ? process.env.NEXT_PUBLIC_SANITY_DEV_DATASET
  //   : process.env.NEXT_PUBLIC_SANITY_PROD_DATASET;
  // const errorMessage = `Missing environment variable: ${isDevelopment ? 'NEXT_PUBLIC_SANITY_DEV_DATASET' : 'NEXT_PUBLIC_SANITY_PROD_DATASET'}`;

  if (process.env.NODE_ENV === "development") {
    return assertValue(process.env.NEXT_PUBLIC_SANITY_DEV_DATASET, "Missing environment variable: NEXT_PUBLIC_SANITY_DEV_DATASET")
  }
  if (process.env.NODE_ENV === "production") {
    return assertValue(process.env.NEXT_PUBLIC_SANITY_PROD_DATASET, "Missing environment variable: NEXT_PUBLIC_SANITY_PROD_DATASET")
  }

  // return assertValue(process.env.NEXT_PUBLIC_SANITY_PROD_DATASET, errorMessage);
  // return assertValue(envVar, errorMessage);
};

export const dataset = getDataset();

// export const dataset = process.env.NODE_ENV === "development" ? assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DEV_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DEV_DATASET'
// ) : assertValue(process.env.NEXT_PUBLIC_SANITY_PROD_DATASET, 'Missing environment variable: NEXT_PUBLIC_SANITY_PROD_DATASET');

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
