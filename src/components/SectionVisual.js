import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";


const SectionVisual = () => {

  const slidesData = [
    {
      title: "썸머 시즌오프\n2주차 혜택 OPEN",
      desc: "레깅스부터 팬츠까지\n최대 80% 혜택으로 만나보세요",
      imgSrc: require("../images/img_visual_item1.jpeg"),
      webpSrc: require("../images/img_visual_item1.webp"),
      altText:
        "에어스트 썸머 슬림핏 조거팬츠를 입은 여성과 에어스트 맨즈 4부 쇼츠를 입은 남성이 야외에서 조깅하는 모습",
    },
    {
      title: "휴양지 인생삿을 만드는\n안다르 워터 컬렉션",
      desc: "호텔 풀부터 바다까지.\n액티브한 고기능성과 하이엔드 감성의 만남.",
      imgSrc: require("../images/img_visual_item2.jpg"),
      webpSrc: require("../images/img_visual_item2.webp"),
      altText:
        "해변에서 블루 풀앤비치 원숄더 원피스 수영복을 입고 포즈를 취한 여성",
    },
    {
      title: "쾌적하고 세련된 출근길\n썸머 테이퍼드 슬랙스 출시",
      desc: "수선 필요 없는 롱 & 숏 기장 세분화.\n올여름 출근부터 골프까지 걱정 없죠.",
      imgSrc: require("../images/img_visual_item3.jpeg"),
      webpSrc: require("../images/img_visual_item3.webp"),
      altText:
        "도시 거리에서 흰색 셔츠와 에어스트 테이퍼드핏 슬랙스를 입고 하이힐을 신은 여성이 횡단보도를 건너는 모습",
    },
    {
      title: "발레&필라테스 한다면?\n안다르로 예쁘게 입어요",
      desc: "셔링이 우아하게 볼륨감을 더해주고,\n찰랑핏으로 군살도 커버해요.",
      imgSrc: require("../images/img_visual_item4.jpg"),
      webpSrc: require("../images/img_visual_item4.webp"),
      altText:
        "연한 핑크색과 라벤더색 비 프리 셔링 캡숄더 크롭탑(내장형)을 입은 두 여성이 실내에서 포즈를 취하는 모습",
    },
    {
      title: "냉감 기능으로 더 시원한\n카고 쇼츠 신상 출시",
      desc: "트렌디한 카고 스타일,\n캠핑 · 등산 · 러닝까지 다양하게 입어요.",
      imgSrc: require("../images/img_visual_item5.jpg"),
      webpSrc: require("../images/img_visual_item5.webp"),
      altText:
        "도시 거리에서 네이비 티셔츠와 에어스트 맨즈 4부 쇼츠를 입은 남성이 횡단보도를 건너는 모습",
    },
    {
      title: "등교부터 방과후까지\n편하고 쿨한 안다르 주니어",
      desc: "가볍고 편안한 안다르의 기능성으로,\n바쁜 우리 아이의 일상을 바꿔주세요.",
      imgSrc: require("../images/img_visual_item6.jpg"),
      webpSrc: require("../images/img_visual_item6.webp"),
      altText:
        "검은색 주니어 에어리핏 폴로 숏슬리브와 초록색 치마를 입은 소녀, 베이지색 주니어 에어리핏 폴로 숏슬리브와 초록색 반바지를 입은 소년",
    },
    {
      title: "코트 위 가장 '쿨하게'\n안다르 테니스",
      desc: "우아한 비주얼과 환상적인 핏.\n땀과 비침, 끼임을 해결한 쿨한 기능성까지.",
      imgSrc: require("../images/img_visual_item7.jpg"),
      webpSrc: require("../images/img_visual_item7.webp"),
      altText:
        "테니스 코트에서 초록색 폴로 셔츠와 에어스트 플리츠 투인원 스커트를 입고 테니스 공을 들고 있는 여성",
    },
    {
      title: "대체 불가능한 쾌적함,\n프리미엄 짐웨어 A.R.M",
      desc: "어깨는 넓고, 가슴은 탄탄해 보이는 핏.\n애슬레저 1위의 기능성 짐웨어를 경험하세요.",
      imgSrc: require("../images/img_visual_item8.jpg"),
      webpSrc: require("../images/img_visual_item8.webp"),
      altText:
        "헬스장에서 맨즈 A.R.M 컴프레션 숏슬리브와 검정 운동복 바지를 입고 케틀벨을 들고 운동하는 남성",
    },
    {
      title: "운동할 땐 역시,\n애슬레저 1위 레깅스",
      desc: "국내 유일, 라이크라® 스포츠 인증을 받은\n안다르의 레깅스를 지금 만나보세요.",
      imgSrc: require("../images/img_visual_item9.jpg"),
      webpSrc: require("../images/img_visual_item9.webp"),
      altText:
        "실내에서 NEW 에어리핏 슬림핏 티셔츠와 에어쿨링 지니 바이커 5부 레깅스를 입고 점프 동작을 하는 여성",
    },
    {
      title: "가장 완벽한 레깅스 뒤태\n안다르 심리스 팬티",
      desc: "끼임 없는 입체 패턴과 편안한 체형 보정.\n360° 매끄러운 힙라인을 완성하세요.",
      imgSrc: require("../images/img_visual_item10.jpg"),
      webpSrc: require("../images/img_visual_item10.webp"),
      altText:
        "안다르 심리스 레깅스 팬티를 착용한 상태에서도 속옷 자국이 보이지 않는 레깅스를 입은 여성의 뒷모습",
    },
  ];
    useEffect(() => {
      // LCP Placeholder 제거
      const placeholder = document.getElementById("lcp-placeholder");
      if (placeholder) placeholder.remove();
    }, []);

  return (
    <section className="section_visual">
      <h2 className="blind">제품 이미지 슬라이드</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // loop={true}
        pagination={{
          clickable: true,
          el: ".pagination",
        }}
        navigation={{ clickable: true, nextEl: ".next", prevEl: ".prev" }}
        effect={"fade"}
        initialSlide={0}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        className="swiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href="" className="link_item">
              <div className="text_box">
                <strong className="title">
                  {slide.title.split("\n").map((text, i) => (
                    <span key={i}>
                      {text}
                    </span>
                  ))}
                </strong>
                <p className="desc">
                  {slide.desc.split("\n").map((text, i) => (
                    <span key={i}>
                      {text}
                    </span>
                  ))}
                </p>
              </div>
              <div className="image_box">
                {/* <picture> */}
                  {/* <source srcSet={slide.webpSrc} type="image/webp" /> */}
                  <img src={slide.imgSrc} alt="대체 텍스트"  />
                {/* </picture> */}
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div className="pagination"></div>
      </Swiper>
    </section>
  );
};

export default SectionVisual;
