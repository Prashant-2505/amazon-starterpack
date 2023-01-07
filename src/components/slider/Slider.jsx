import React from "react";
import './slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      {/* here we are using sweeper js */}

      <Swiper
      modules={[Pagination,Navigation]}
      className='mySwiper'
      navigation={true}
      loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div className="shop-btn">Shop now</div>
            </div>
            <img src={slide.img} alt="" className="img-p " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
