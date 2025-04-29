import { sanityFetch } from "./lib/sanityFetch";
import { LandingBlurbQueryResponse, TestimonialQueryResponse } from "./lib/types";
import { landingBlurbQuery, testimonialQuery } from "./lib/queries";
import LandingHero from "./components/LandingHero";
import CtaButton from "./components/CtaButton";
import TestimonialSwiper from "./components/TestimonialSwiper";
import ClientImage from "./components/ClientImg";
import landing from './landing.module.css';
import PortraitPlaceholder from "./components/PortraitPlaceholder";
import { libre_baskerville } from './fonts'

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
          {landingBlurb?.headshot ?
            <ClientImage
            img={landingBlurb?.headshot}
            classes={`hidden sm:block ${landing.image} rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl`}
            sizes={"(max-width: 1024px) 100vw, 50vw"}

            /> :
            <PortraitPlaceholder />
          }
          <div className="sm:absolute sm:bottom-0 sm:left-16">
            <div className={`${libre_baskerville.className} text-5xl leading-normal w-fit ${!landingBlurb?.headshot && 'bg-white'}`}>Annie Scott, </div>
            <div className="italic text-4xl w-fit">Full Spectrum Doula</div>
          </div>
        </div>
        <div className="sm:col-span-2 sm:relative sm:px-8">
          <div className={`text-3xl italic ${libre_baskerville.className}`}>
            {landingBlurb?.headline ? landingBlurb.headline : 'Welcome'}
          </div>
          {landingBlurb?.copy &&
            <LandingHero
              copy={landingBlurb}
              classNames="sm:pt-5"
            />
          }
          <div className="flex w-full justify-center mb-8 sm:mb-0 sm:absolute sm:bottom-0">
            <CtaButton link={"/contact"} text={"Contact"}/>
            <CtaButton link={"/services"} text={"Services"}/>
          </div>
        </div>
      </div>

      {testimonials.length > 0 &&
        <TestimonialSwiper testimonials={testimonials} />
      }
    </div>
  );
}