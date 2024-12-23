import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 



const AreaBanner = () => {

  const bannerData = [
    {
      link: "",
      imgSrc: require("../images/img_banner_item1.jpg"),
      webpSrc: require("../images/img_banner_item1.webp"),
      altText: "3천원 할인쿠폰",
    },
    {
      link: "",
      imgSrc: require("../images/img_banner_item2.jpg"),
      webpSrc: require("../images/img_banner_item2.webp"),
      altText: "멤버십 전용 혜택 할인",
    },
  ];
  
  return (
    <div className="banner_area">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        pagination={{
          clickable: true,
          el: ".pagination",
          type: "fraction",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper"
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <a href={banner.link}>
              <div className="image_box">
                <picture>
                  <source srcSet={banner.webpSrc} type="image/webp" />
                  <img
                    src={banner.imgSrc}
                    alt={banner.altText}
                  />
                </picture>
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div className="pagination"></div>
      </Swiper>
    </div>
  );
};

export default AreaBanner;
