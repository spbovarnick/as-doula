"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination"
import { TestimonialQueryResponse } from "../lib/types";
import "../styles/swiper.css";

interface TestimonialSwiperProps {
  testimonials: TestimonialQueryResponse[],
};

const TestimonialSwiper: React.FC<TestimonialSwiperProps>  = ({ testimonials }) => {

  return (
    <div className="mb-8">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={12}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        slidesOffsetAfter={32}
      >
        {testimonials?.map((item) => (
          <SwiperSlide
            key={item._id}
            className="text-base"
          >
            <p>
              {`"${item.testimonial.trimEnd().trimStart()}"`}
            </p>
            <br />
            <p className="italic text-lg opacity-80">
              - {item.client_name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSwiper;