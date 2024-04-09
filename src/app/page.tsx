import { sanityFetch } from "./lib/sanityFetch";
import { LandingBlurbQueryResponse } from "./lib/types";
import { landingBlurbQuery } from "./lib/queries";
import LandingHero from "./components/LandingHero";

export default async function Home() {
  const landingBlurb: LandingBlurbQueryResponse = await sanityFetch<LandingBlurbQueryResponse>({
    query: landingBlurbQuery,
    tags: ["landingBlurb",],
  })

  return (
    <div>
      <LandingHero copy={landingBlurb} />
    </div>
  );
}
