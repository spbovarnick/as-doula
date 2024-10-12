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

      <div className="mb-5 sm:grid sm:grid-cols-3">
        <div className="mb-8 sm:flex sm:flex-col sm:justify-center sm:col-span-1">
          <div className="font-libre_baskerville text-5xl leading-normal w-fit">Annie Scott, </div>
          <div className="italic text-4xl w-fit">Full Spectrum Doula</div>
        </div>
        <LandingHero
          copy={landingBlurb}
          classNames="sm:col-span-2 sm:pt-5"
        />
      </div>

      <div className="flex w-full justify-center mb-8">
        <CtaButton link={"/contact"} text={"Contact"}/>
        <CtaButton link={"/services"} text={"Learn More"}/>
      </div>

      <TestimonialSwiper testimonials={testimonials} />
    </div>
  );
}
