import React from 'react'
import "../../stylesheets/image_slider.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const ImageSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_1" /></SwiperSlide>
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_2" /></SwiperSlide>
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_3" /></SwiperSlide>
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_4" /></SwiperSlide>
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_5" /></SwiperSlide>
        <SwiperSlide><img src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" alt="slide_6" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageSlider
