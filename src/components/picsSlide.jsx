"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/picSlide.css";

import { Pagination, Autoplay } from "swiper/modules";

export default function PicSlides() {
  return (
    <div className="picSlide-wrapper">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="./first.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./second.jpg" />
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
