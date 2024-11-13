import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const AdSlide = () => {
  const ads = [
    {
      title: "[공식몰 단독]",
      content: "카톡 채널 추가하고 3,000원 할인 받기",
      icon: "ico_kakao",
      link: "#",
    },
    {
      title: "[애슬레저 1위]",
      content: "에어쿨링 레깅스 1+1 바로가기",
      icon: "",
      link: "#",
    },
    {
      title: "[블랙프라이데이]",
      content: "1년에 단 한 번 UP TO 80%",
      icon: "",
      link: "#",
    },
  ];

  return (
    <aside className="ad_area">
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <a href={ad.link} className="link_ad">
              <strong className="ad_title">{ad.title}</strong>
              {ad.content}
              {ad.icon && <i className={ad.icon} aria-label="카톡채널"></i>}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
};

export default AdSlide;
