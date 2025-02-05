import { sanityFetch } from "./lib/sanityFetch";
import { LandingBlurbQueryResponse, TestimonialQueryResponse } from "./lib/types";
import { landingBlurbQuery, testimonialQuery } from "./lib/queries";
import LandingHero from "./components/LandingHero";
import CtaButton from "./components/CtaButton";
import TestimonialSwiper from "./components/TestimonialSwiper";
import ClientImage from "./components/ClientImg";
import landing from './landing.module.css';


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

      <div className="mb-5 sm:grid sm:grid-cols-3 sm:relative sm:gap-x-4 sm:mb-8">
        <div className="mb-8 sm:flex sm:flex-col sm:justify-center sm:col-span-1 ">
          {/* <div className="sm:relative"> */}
          {landingBlurb.headshot &&  <ClientImage
              img={landingBlurb?.headshot}
            classes={`hidden sm:block ${landing.image} rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl`}
              sizes={"(max-width: 1024px) 100vw, 50vw"}

            />}
            <div className="sm:absolute sm:bottom-0 sm:left-16">
              <div className="font-libre_baskerville text-5xl leading-normal w-fit">Annie Scott, </div>
              <div className="italic text-4xl w-fit">Full Spectrum Doula</div>
            </div>
          {/* </div> */}
        </div>
        <div className="sm:col-span-2 sm:relative sm:px-8">
          <div className="text-3xl italic font-libre_baskerville">
            {landingBlurb.headline}
          </div>
          <LandingHero
            copy={landingBlurb}
            classNames="sm:pt-5"
          />
          <div className="flex w-full justify-center mb-8 sm:mb-0 sm:absolute sm:bottom-0">
            <CtaButton link={"/contact"} text={"Contact"}/>
            <CtaButton link={"/services"} text={"Learn More"}/>
          </div>
        </div>
      </div>


      <TestimonialSwiper testimonials={testimonials} />
    </div>
  );
}
