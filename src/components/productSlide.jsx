"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/productSlide.css";

import { Navigation } from "swiper/modules";

import Card from "./Card.jsx";

export default function ProductSlide() {
  return (
    <div className="productSlide-wrapper">
      <Swiper
        el={".swiper-navigation"}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <Card
              img="clothes1.png"
              title="Brown shirt"
              price="39.99"
              rating="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="clothes2.png"
              title="Checkered Shirt"
              price="27.99"
              rating="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="clothes3.png"
              title="Striped Shirt"
              price="47.95"
              rating="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="clothes4.png"
              title="Flannel Shirt"
              price="35.40"
              rating="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="clothes5.png"
              title="Overnight Duffle"
              price="52.35"
              rating="5"
            />
          </SwiperSlide>
        </div>
        <div className="swiper-navigation"></div>
      </Swiper>
    </div>
  );
}
