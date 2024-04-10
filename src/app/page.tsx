import { sanityFetch } from "./lib/sanityFetch";
import { LandingBlurbQueryResponse } from "./lib/types";
import { landingBlurbQuery } from "./lib/queries";
import LandingHero from "./components/LandingHero";
import CtaButton from "./components/CtaButton";

export default async function Home() {
  const landingBlurb: LandingBlurbQueryResponse = await sanityFetch<LandingBlurbQueryResponse>({
    query: landingBlurbQuery,
    tags: ["landingBlurb",],
  })

  return (
    <div className="pt-6 pl-5 pr-5 mb-8">
      <h1 className="font-libre_baskerville text-5xl leading-normal">Annie <br/> Scott</h1>
      <LandingHero copy={landingBlurb} />
      <div className="flex">
        <CtaButton link={""} text={"Contact"}/>
        <CtaButton link={""} text={"Learn More"}/>
      </div>
    </div>
  );
}
