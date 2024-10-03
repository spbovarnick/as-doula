import { sanityFetch } from "./lib/sanityFetch";
import { LandingBlurbQueryResponse, TestimonialQueryResponse } from "./lib/types";
import { landingBlurbQuery, testimonialQuery } from "./lib/queries";
import LandingHero from "./components/LandingHero";
import CtaButton from "./components/CtaButton";
import TestimonialSwiper from "./components/TestimonialSwiper";

export default async function Home() {
  const landingBlurb: LandingBlurbQueryResponse = await sanityFetch<LandingBlurbQueryResponse>({
    query: landingBlurbQuery,
    tags: ["landingBlurb",],
  })

  const testimonials: TestimonialQueryResponse[] = await sanityFetch<TestimonialQueryResponse[]>({
    query: testimonialQuery,
    tags: ["testimonial"],
  })

  return (
    <div >
      <div className="mb-8">
        <h1 className="font-libre_baskerville text-5xl leading-normal">Annie <br/> Scott</h1>
        <LandingHero copy={landingBlurb} />
        <div className="flex">
          <CtaButton link={"/contact"} text={"Contact"}/>
          <CtaButton link={"/services"} text={"Learn More"}/>
        </div>
      </div>
      <TestimonialSwiper testimonials={testimonials} />
    </div>
  );
}
