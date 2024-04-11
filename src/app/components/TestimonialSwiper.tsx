"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import { SwiperOptions } from "swiper/types";
import 'swiper/css'
import { TestimonialQueryResponse } from "../lib/types";

// const swiperParams: SwiperOptions = {
//   direction: "horizontal",
//   loop: false,
//   pagination: {
//     el: '.swiper-pagination'
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// }

interface TestimonialSwiperProps {
  testimonials: TestimonialQueryResponse[],
}

// const swiper = new Swiper('.swiper', swiperParams)

const TestimonialSwiper: React.FC<TestimonialSwiperProps>  = ({ testimonials }) => {
  console.log(testimonials)

  return (
    <>
      <Swiper
        modules={[Pagination]}
        // pagination={{
        //   dynamicBullets: true,
        // }}
      >
        {testimonials?.map((item) => (
          <SwiperSlide key={item._id}>
            {item.testimonial}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TestimonialSwiper;