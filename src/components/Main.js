import React from "react";
import AdSlide from "./AdSlide";
import SectionVisual from "./SectionVisual";
import SectionProduct from "./SectionProduct";
import SectionBest from "./SectionBest";
import SectionLookBook from "./SectionLookBook";
import SectionNew from "./SectionNew";
import AreaBanner from "./AreaBanner";
import "swiper/swiper-bundle.css"; 

const Main = () => {
  
  const leggingProducts = [
    {
      title: "[1+1] 에어쿨링 지니 시그니처 5부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_knee_signature_womans.jpg"),
      altText: "1+1 다크 그레이 5부 레깅스, 운동용 슬림핏 디자인",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 지니 시그니처 3부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_mid_signature_womans.jpg"),
      altText: "야외에서 화이트 크롭탑과 3부 레깅스를 입고 스트레칭하는 여성",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 지니 시그니처 9부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_ankle_signature_womans.jpg"),
      altText:
        "연한 초록색 에어쿨링 지니 시그니처 레깅스, 1+1, 8.2부와 9부 길이 선택 가능, 운동용으로 적합한 슬림핏 디자인",
      tags: ["NEW 컬러 출시", "애슐레저 1위"],
    },
    {
      title: "[1+1] 심리스 레깅스 팬티",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_seamless_underwear_womans.jpg"),
      altText: "크림색 티셔츠와 베이지색 심리스 팬티를 입은 여성, 뒷모습",
      tags: [],
    },
    {
      title: "[1+1] 에어쿨링 지니 시그니처 4부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_above_womans.jpg"),
      altText: "크롭탑과 4.5부 레깅스를 입고 도심에서 달리고 있는 여성",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 지니 시그니처 7부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_calf_signature_womans.jpg"),
      altText: "야외에서 크롭탑과 7부 레깅스를 입고 운동하는 두 여성",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 릴레어 하이라이즈 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_high_rise_womans.jpg"),
      altText: "스포츠 브라와 8.2부 또는 9부 레깅스를 입고 스트레칭 중인 여성",
      tags: [],
    },
    {
      title: "[1+1] NEW 에어쿨링 샤론 부츠컷 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_sharon_bootcut_womans.jpg"),
      altText:
        "크롭탑과 롱부츠컷 레깅스를 입고 실내에서 운동 자세를 취하고 있는 여성",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 핏 텐션 4.5부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_tension_above_womans.jpg"),
      altText:
        "검정색 짧은 소매 크롭탑과 허벅지 중간까지 오는 숏레깅스를 입고 벽에 기대고 있는 여성",
      tags: ["7일 한정 특가"],
    },
    {
      title: "[1+1] 에어쿨링 포켓 9부 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_ankle_pocket_womans.jpg"),
      altText:
        "검은색 발목 길이 레깅스를 입고 허리에 재킷을 묶고, 레깅스 포켓에 스마트폰을 넣은 여성의 측면 모습",
      tags: [],
    },
  ];

  const bratopProducts = [
    {
      title: "[3 SET] 비 프리 올데이 크롭탑",
      discount: 32,
      currentPrice: 59000,
      originalPrice: 87000,
      imgSrc: require("../images/img_bratop_item1.jpg"),
      altText: "연분홍색 크롭탑과 보라색 레깅스를 입고 요가 자세를 취하는 여성",
      tags: ["이벤트 한정 세트"],
    },
    {
      title: "릴레어 올데이 크롭탑",
      discount: 25,
      currentPrice: 29000,
      originalPrice: 39000,
      imgSrc: require("../images/img_bratop_item2.jpg"),
      altText:
        "햇빛이 비추는 실내에서 회색 크롭탑과 레깅스를 입은 여성이 옆을 응시하는 모습",
      tags: ["라이트 서포트"],
    },
    {
      title: "릴레어 올데이 크롭탑",
      discount: 20,
      currentPrice:31000,
      originalPrice: 39000,
      imgSrc: require("../images/img_bratop_item3.jpg"),
      altText: "카키색 크롭탑과 레깅스를 입고 벽에 기대어 있는 여성",
      tags: ["라이트 서포트"],
    },
    {
      title: "[1&1] 에어리프리 소프트 브라탑",
      discount: 8,
      currentPrice: 53000,
      originalPrice: 58000,
      imgSrc: require("../images/img_bratop_item4.jpg"),
      altText: "화이트 브라탑과 옐로우 팬츠를 입고 팔을 올린 여성",
      tags: ["라이트 서포트"],
    },
    {
      title: "위드브라 하프넥 크롭탑 (패드 내장형)",
      discount: 50,
      currentPrice: 18500,
      originalPrice: 37000,
      imgSrc: require("../images/img_bratop_item5.jpg"),
      altText: "연두색 브라탑을 입은 여성과 베이지색 브라탑을 입은 여성",
      tags: [],
    },
    {
      title: "[1&1] 비 프리 브리드 브라탑",
      discount: 17,
      currentPrice: 48000,
      originalPrice: 58000,
      imgSrc: require("../images/img_bratop_item6.jpg"),
      altText: "검은색 브라탑과 레깅스를 입고 권투 글러브를 낀 여성",
      tags: ["미디엄 서포트"],
    },
    {
      title: "위드브라 홀터넷 크롭탑 (패드 내장형)",
      discount: 20,
      currentPrice: 28000,
      originalPrice: 35000,
      imgSrc: require("../images/img_bratop_item7.jpg"),
      altText: "초록색 브라탑과 남색 레깅스를 입은 여성",
      tags: ["NEW 컬러 출시", "라이트 서포트"],
    },
    {
      title: "비 프리 U백 브라탑 (패드 일체형)",
      currentPrice: 35000,
      imgSrc: require("../images/img_bratop_item8.jpg"),
      altText: "초록색 브라탑과 회색 레깅스를 입은 여성이 뒷모습을 보여줌",
      tags: ["미디엄 서포트"],
    },
    {
      title: "프로트 지퍼 홀 백 브라탑",
      discount: 25,
      currentPrice: 29000,
      originalPrice: 39000,
      imgSrc: require("../images/img_bratop_item9.jpg"),
      altText: "검은색 지퍼 브라탑과 회색 레깅스를 입은 여성의 상반신 모습",
      tags: ["하이 서포트"],
    },
    {
      title: "[1&1] 에어리프리 소프트 크롭탑",
      discount: "15%",
      currentPrice: 49000,
      originalPrice: 58000,
      imgSrc: require("../images/img_bratop_item10.jpg"),
      altText:
        "연한 카키색 크롭탑과 레깅스를 입은 여성이 벽에 기대어 서 있는 모습",
      tags: ["라이트 서포트"],
    },
  ];

  const setProducts = [
    {
      title: "[1&1] NEW 에어리핏 오버핏 티셔츠",
      discount: 22,
      currentPrice: 45000,
      originalPrice: 58000,
      imgSrc: require("../images/img_tshirt_air_womans.jpg"),
      altText:
        "연핑크색 티셔츠와 검정색 레깅스를 입은 여성이 운동 중 한 발을 든 모습",
      tags: ["NEW 컬러 출시"],
    },
    {
      title: "[1&1] NEW 에어리핏 슬림핏 티셔츠",
      discount: 25,
      currentPrice: 43000,
      originalPrice: 58000,
      imgSrc: require("../images/img_tshirt_slim_air_womans.jpg"),
      altText:
        "베이지와 핑크색 긴 소매 티셔츠를 입고 스트레칭 운동 중인 두 여성, 1+1 프로모션",
    },
    {
      title: "[1+1] 에어쿨링 지니 시그니처 레깅스",
      discount: 50,
      currentPrice: 49000,
      originalPrice: 98000,
      imgSrc: require("../images/img_leggins_ankle_signature_womans.jpg"),
      altText:
        "연한 초록색 에어쿨링 지니 시그니처 레깅스, 1+1, 8.2부와 9부 길이 선택 가능, 운동용으로 적합한 슬림핏 디자인",
      tags: ["NEW 컬러 출시", "애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 4.5부 레깅스",
      discount: 50,
      currentPrice: 43000,
      originalPrice: 86000,
      imgSrc: require("../images/img_leggins_above_womans.jpg"),
      altText: "크롭탑과 4.5부 레깅스를 입고 도심에서 달리고 있는 여성",
      tags: ["애슐레저 1위"],
    },
    {
      title: "[1+1] 에어쿨링 지니 바이커 5부 레깅스",
      discount: 50,
      currentPrice: 43000,
      originalPrice: 86000,
      imgSrc: require("../images/img_leggins_knee_signature_womans.jpg"),
      altText: "1+1 다크 그레이 5부 레깅스, 운동용 슬림핏 디자인",
      tags: ["NEW 컬러 출시"],
    },
    {
      title: "[[1&1] 에어스트 4.5부 쇼츠",
      discount: 17,
      currentPrice: 74000,
      originalPrice: 90000,
      imgSrc: require("../images/img_shorts_above_womans.jpg"),
      altText:
        "야외에서 흰색 크롭탑과 각각 카키색 및 네이비색 4.5부 쇼츠를 입은 두 여성이 함께 조깅하고 있는 모습",
    },
    {
      title: "[1&1] 에어스트 3.5부 쇼츠",
      discount: 22,
      currentPrice: 67000,
      originalPrice: 86000,
      imgSrc: require("../images/img_shorts_mid_womans.jpg"),
      altText:
        "해변을 배경으로 흰색 슬리브리스 크롭탑과 연한 핑크색 3.5부 쇼츠를 입은 여성이 난간에 기대어 서 있는 모습",
    },
    {
      title: "[1&1] 에어로실버 크롭티",
      discount: "16%",
      currentPrice: 42000,
      originalPrice: 50000,
      imgSrc: require("../images/img_cropt_air_womans.jpg"),
      altText:
        "흰색 크롭티와 연회색 조거 팬츠를 입고 달리기를 하는 여성의 모습",
    },
  ];

  const bestProducts = {
    best1: [
      {
        title: "[1+1] 에어쿨링 지니 시그니처 레깅스",
        discount: 50,
        currentPrice: 49000,
        originalPrice: 98000,
        imgSrc: require("../images/img_leggins_ankle_signature_womans.jpg"),
        altText:
          "연한 초록색 에어쿨링 지니 시그니처 레깅스, 1+1, 8.2부와 9부 길이 선택 가능, 운동용으로 적합한 슬림핏 디자인",
        tags: ["애슐레저 1위"],
      },
      {
        title: "[1+1] 에어쿨링 지니 바이커 5부 레깅스",
        discount: 50,
        currentPrice: 43000,
        originalPrice: 86000,
        imgSrc: require("../images/img_leggins_knee_signature_womans.jpg"),
        altText: "1+1 다크 그레이 5부 레깅스, 운동용 슬림핏 디자인",
        tags: ["NEW 컬러 출시", "애슐레저 1위"],
      },
      {
        title: "PK 서스테이너블 맨즈 폴로 숏슬리브",
        discount: 12,
        currentPrice: 72000,
        originalPrice: 82000,
        imgSrc: require("../images/img_polo_short_pk_item2_mens.jpg"),
        altText: "브라운 컬러의 짧은 소매 폴로 셔츠를 입은 남성, 슬림핏 디자인",
        tags: ["7일 한정 특가"],
      },
      {
        title: "[1&1] 에어리핏 맨즈 폴로 티셔츠",
        discount: 30,
        currentPrice: 65000,
        originalPrice: 94000,
        imgSrc: require("../images/img_polo_shirt_air_mens.jpg"),
        altText:
          "연한 그린 폴로 셔츠를 입고 골프 클럽을 들고 있는 남성, 1+1 프로모션",
        tags: ["스탠다드핏"],
      },
      {
        title: "[1&1] NEW 에어리핏 오버핏 티셔츠",
        discount: 22,
        currentPrice: 45000,
        originalPrice: 58000,
        imgSrc: require("../images/img_tshirt_slim_air_womans.jpg"),
        altText:
          "베이지와 핑크색 긴 소매 티셔츠를 입고 스트레칭 운동 중인 두 여성, 1+1 프로모션",
        tags: ["NEW 컬러 출시"],
      },
      {
        title: "에어스트 테이퍼드핏 슬랙스",
        discount: 14,
        currentPrice: 59000,
        originalPrice: 69000,
        imgSrc: require("../images/img_slacks_tapered_womans.jpeg"),
        altText:
          "도심의 횡단보도를 건너며 흰 셔츠와 검정 슬랙스를 입은 여성, 세련된 스타일",
        badgeImgSrc: require("../images/ico_new.png"),
        badgeAltText: "신상품",
        tags: ["썸머 팬츠"],
      },
    ],
    best2: [
      {
        title: "NEW 기모 유로센스 레깅스",
        discount: 50,
        currentPrice: 49000,
        originalPrice: 98000,
        imgSrc: require("../images/img_leggins_brushed_eurosense_womans.jpg"),
        altText:
          "눈 덮인 산에서 검정 재킷과 8.2부, 9부 길이 선택 가능한 레깅스를 입은 여성, 겨울 아웃도어 패션, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_new_gimo.png"),
        badgeAltText: "기모 신상품",
        tags: ["애슐레저 1위"],
      },
      {
        title: "[1+1] NEW 에어웜 기모 샤론 부츠컷 레깅스",
        discount: 50,
        currentPrice: 43000,
        originalPrice: 86000,
        imgSrc: require("../images/img_leggins_brushed_sharon_bootcut_womans.jpg"),
        altText:
          "도시에서 검정 재킷과 부츠컷 레깅스를 입고 걷고 있는 여성, 겨울 아웃도어 패션, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_new_gimo.png"),
        badgeAltText: "기모 신상품",
        tags: ["NEW 컬러 출시", "애슐레저 1위"],
      },
      {
        title: "[풀스택] NEW 에어스트 우먼 아이스 슬랙스",
        discount: 12,
        currentPrice: 72000,
        originalPrice: 82000,
        imgSrc: require("../images/img_slacks_ice_womans.jpg"),
        altText: "검정색 임부용 레깅스를 입고 배를 감싸고 있는 임신한 여성",
        badgeImgSrc: require("../images/ico_new.png"),
        badgeAltText: "신상품",
        tags: ["7일 한정 특가"],
      },
      {
        title: "[1&1] NEW 에어무스 기모 조거핏 레깅스",
        discount: 30,
        currentPrice: 65000,
        originalPrice: 94000,
        imgSrc: require("../images/img_leggins_brushed_jogger_womans.jpg"),
        altText:
          "겨자색 상의와 조거핏 레깅스를 입고 걷고 있는 여성, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_gimo.png"),
        badgeAltText: "기모 상품",
        tags: ["스탠다드핏"],
      },
      {
        title: "에어스트 기모 부츠컷 슬랙스",
        discount: 22,
        currentPrice: 45000,
        originalPrice: 58000,
        imgSrc: require("../images/img_slacks_brushed_bootcut_air_womans.jpg"),
        altText:
          "프장에서 흰색 긴소매 상의와 부츠컷 슬랙스를 입고 골프 클럽을 들고 있는 여성",
        badgeImgSrc: require("../images/ico_gimo.png"),
        badgeAltText: "기모 상품",
        tags: ["NEW 컬러 출시"],
      },
      {
        title: "에어쿨링 지니 시그니처 레깅스",
        discount: 14,
        currentPrice: 59000,
        originalPrice: 69000,
        imgSrc: require("../images/img_leggins_air_signature_womans.jpg"),
        altText:
          "분홍색 긴소매 상의와 8.2부 및 9부 레깅스를 입고 러닝 중인 여성, 1+1 프로모션",
        tags: ["썸머 팬츠"],
      },
    ],
    best3: [
      {
        title: "[1+1] 에어무스 맨즈 기모 퍼포먼스 조거팬츠",
        discount: 50,
        currentPrice: 49000,
        originalPrice: 98000,
        imgSrc: require("../images/img_pants_jogger_brushed_performance_mens.jpg"),
        altText: "네이비색 상의와 조거팬츠를 입고 운동 중인 남성, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_new_gimo.png"),
        badgeAltText: "기모 신상품",
        tags: ["애슐레저 1위"],
      },
      {
        title: "[1+1] 에어솔리드 맨즈 기모 슬랙스",
        discount: 50,
        currentPrice: 43000,
        originalPrice: 86000,
        imgSrc: require("../images/img_slacks_brushed_airsolid_mens.jpg"),
        altText:
          "겨울 골프장에서 네이비색 상의와 슬랙스를 입고 골프 클럽을 들고 걷고 있는 남성, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_new_gimo.png"),
        badgeAltText: "기모 신상품",
        tags: ["NEW 컬러 출시", "애슐레저 1위"],
      },
      {
        title: "[풀스택] NEW 에어스트 맨즈 아이스 슬랙스",
        discount: 12,
        currentPrice: 72000,
        originalPrice: 82000,
        imgSrc: require("../images/img_slacks_ice_mens.jpg"),
        altText:
          "도시 배경에서 화이트 긴소매 상의와 슬랙스를 입고 걷고 있는 남성, 1+1 프로모션",
        tags: ["7일 한정 특가"],
      },
      {
        title: "울라이크 스트레치 맨즈 슬랙스",
        discount: 30,
        currentPrice: 65000,
        originalPrice: 94000,
        imgSrc: require("../images/img_slacks_wool_stretch_mens.jpg"),
        altText:
          "도시에서 재킷과 슬랙스를 입고 걷고 있는 남성, 캐주얼한 스타일",
        badgeImgSrc: require("../images/ico_gimo.png"),
        badgeAltText: "기모 상품",
        tags: ["스탠다드핏"],
      },
      {
        title: "[1&1] NEW 에어리핏 오버핏 티셔츠",
        discount: 22,
        currentPrice: 45000,
        originalPrice: 58000,
        imgSrc: require("../images/img_tshirt_air_mens.jpg"),
        altText: "화이트 긴소매 셔츠를 입고 있는 남성, 3세트 프로모션",
        tags: ["NEW 컬러 출시"],
      },
      {
        title: "에어스트 테이퍼드핏 슬랙스",
        discount: 14,
        currentPrice: 59000,
        originalPrice: 69000,
        imgSrc: require("../images/img_slacks_tapered_mens.jpg"),
        altText:
          "도시 배경에서 반팔과 긴소매 티셔츠를 입고 있는 두 남성, 3세트 프로모션",
        badgeImgSrc: require("../images/ico_gimo.png"),
        badgeAltText: "기모 신상품",
        tags: ["썸머 팬츠"],
      },
    ],
    best4: [
      {
        title: "[1+1] 논슬립 퍼포먼스 삭스",
        discount: 50,
        currentPrice: 49000,
        originalPrice: 98000,
        imgSrc: require("../images/img_socks_nonslip_performance .jpg"),
        altText:
          "요가 매트 위에서 크루삭스와 니삭스를 신고 스트레칭 중인 두 여성, 1+1 프로모션",
        tags: ["애슐레저 1위"],
      },
      {
        title: "팔레트 기모 삭스",
        discount: 50,
        currentPrice: 43000,
        originalPrice: 86000,
        imgSrc: require("../images/img_socks_bushed_palette.jpg"),
        altText: "브라운 색상의 팔레트 기모 양말을 신은 모습, 1+1 프로모션",
        badgeImgSrc: require("../images/ico_gimo.png"),
        badgeAltText: "기모 상품",
        tags: ["NEW 컬러 출시", "애슐레저 1위"],
      },
      {
        title: "서포트 힙 밴드",
        discount: 12,
        currentPrice: 72000,
        originalPrice: 82000,
        imgSrc: require("../images/img_band_support_hip.jpg"),
        altText:
          "힙 밴드를 사용하여 스쿼트 자세를 취한 여성, 네이비색 레깅스 착용",
        badgeImgSrc: require("../images/ico_new.png"),
        badgeAltText: "신상품",
        tags: ["7일 한정 특가"],
      },
      {
        title: "안다르 심리스 레깅스 팬티",
        discount: 30,
        currentPrice: 65000,
        originalPrice: 94000,
        imgSrc: require("../images/img_underwear_seamless.jpg"),
        altText: "베이지색 심리스 팬티와 회색 티셔츠를 입은 여성, 4+2 프로모션",
        tags: ["스탠다드핏"],
      },
      {
        title: "릴렉스 에어소프트 요가매트",
        discount: 22,
        currentPrice: 45000,
        originalPrice: 58000,
        imgSrc: require("../images/img_mat_relax_airsoft.jpg"),
        altText:
          "주황색, 연보라색, 민트색 요가 매트가 펼쳐져 있고 말려 있는 모습",
        tags: ["NEW 컬러 출시"],
      },
      {
        title: "데일리 쇼퍼백",
        discount: 14,
        currentPrice: 59000,
        originalPrice: 69000,
        imgSrc: require("../images/img_bag_daily_shopper.jpg"),
        altText: "블랙 쇼퍼백을 들고 걷고 있는 여성, 캐주얼한 옷차림",
        badgeImgSrc: require("../images/ico_new.png"),
        badgeAltText: "신상품",
        tags: ["썸머 팬츠"],
      },
    ],
  };

  const lookBookData = [
    {
      title: "액티브한 고기능성에\n하이엔드 감성을 더한 스윔에어",
      description:
        "자외선 차단 래쉬가드부터 고급스런 비키니까지.\n안다르와 휴양지에서 인생샷 남겨요.",
      imgSrc: require("../images/img_swim_lash_pants_womans.jpg"),
      altText:
        "해변에서 핏되는 래쉬가드와 쇼트팬츠를 입고 서핑 보드와 함께 있는 두 여성 메인",
      products: [
        {
          title: "[SET] 풀앤비치 래쉬가드 & 스윔팬츠",
          discount: 32,
          currentPrice: 59000,
          originalPrice: 88000,
          imgSrc: require("../images/img_swim_lash_pants_set_womans.jpg"),
          altText:
            "해변에서 핏되는 래쉬가드와 쇼트팬츠를 입고 서핑 보드와 함께 있는 두 여성",
        },
        {
          title: "풀앤비치 스윔팬츠",
          discount: 5,
          currentPrice: 37000,
          originalPrice: 39000,
          imgSrc: require("../images/img_swim_pants_womans.jpg"),
          altText:
            "해변에서 흰색 긴소매 래쉬가드와 카키색 쇼트팬츠를 입고 서 있는 여성",
        },
      ],
    },
    {
      title: "출근부터 골프까지 쾌적하게,\n 바람이 통하는 맨즈 폴로",
      description:
        "여름철 땀 걱정 없는 시원함.\n안다르 AI랩의 놀라운 통기성을 경헙하세요.",
      imgSrc: require("../images/img_polo_shirt_airwinds_mens.jpg"),
      altText: "야외에서 그레이 폴로 셔츠를 입고 걷고 있는 남성",
      products: [
        {
          title: "에어윈드 맨즈 폴로 숏슬리브",
          discount: 20,
          currentPrice: 41600,
          originalPrice: 52000,
          imgSrc: require("../images/img_polo_shirt_airwinds_mens.jpg"),
          altText: "야외에서 그레이 폴로 셔츠를 입고 걷고 있는 남성",
          tags: ["릴렉스핏"],
        },
        {
          title: "PK 서스테이너블 맨즈 폴로 숏슬리브",
          discount: 20,
          currentPrice: 44000,
          originalPrice: 55000,
          imgSrc: require("../images/img_polo_short_pk_item1_mens.jpg"),
          altText:
            "브라운 컬러의 짧은 소매 폴로 셔츠를 입은 남성, 슬림핏 디자인",
          tags: ["스탠다드핏"],
        },
      ],
    },
  ];

  const newProducts = [
    {
      title: "쿨라이즈 숏슬리브",
      currentPrice: 35000,
      imgSrc: require("../images/img_tshirt_cool_womans.jpg"),
      altText:
        "하늘색 반팔 티셔츠와 화이트 쇼트팬츠를 입고 있는 여성, 야외 배경",
    },
    {
      title: "쿨라이즈 맨즈 숏슬리브",
      currentPrice: 35000,
      imgSrc: require("../images/img_tshirt_cool_mens.jpg"),
      altText:
        "화이트 반팔 티셔츠와 연한 색상의 바지를 입고 야외에서 걷고 있는 남성",
    },
    {
      title: "에어리핏 니트 카라 원피스",
      discount: "23%",
      currentPrice: 45000,
      originalPrice: 59000,
      imgSrc: require("../images/img_dress_collar_knit_air.jpg"),
      altText: "네이비색 카라 원피스를 입고 테니스 라켓을 어깨에 걸친 여성",
    },
    {
      title: "에어스트 맨즈 4부 쇼츠",
      discount: 14,
      currentPrice: 42000,
      originalPrice: 49000,
      imgSrc: require("../images/img_short_knee_mens.jpg"),
      altText:
        "야외에서 선글라스를 착용하고 네이비색 반팔 티셔츠와 연한 색상의 쇼트팬츠를 입고 있는 남성",
    },
  ];

  return (
    <main className="container" id="main">
      <AdSlide />
      <SectionVisual />
      <SectionBest title="BEST" products={bestProducts} />
      <div className="brand_area">
        <a href="" className="link_brand">
          <h2 className="headline">애슬레저 1위 안다르, 브랜드 스토리</h2>
          <strong className="slogan">Stretch your<br />story with andar</strong>
          <p className="desc">*애슐래저 1위, 2023 대한민국 패션품질대상<br />스포츠 애슬레저 부문</p>
          <span className="label_more">자세히 보기</span>
        </a>
      </div>
      <AreaBanner/>
      <SectionLookBook title="andar’S PICK" lookBookData={lookBookData} />
      <SectionNew title="이달의 신상" products={newProducts} />
      <SectionProduct title="레깅스" products={leggingProducts} />
      <SectionProduct title="브라탑" products={bratopProducts} />
      <SectionProduct title="세트" products={setProducts} />
      <a href="" className="link_brand membership">
        <h2 className="headline">안다르 멤버십</h2>
        <p className="desc">5,000원 쿠폰 지급, 상시 5% 할인<br />등급별 혜택을 놓치지마세요. </p>
        <span className="label_more">자세히 보기</span>
      </a>
      <a href="" className="link_brand store">
        <h2 className="headline">안다르 오프라인 스토어 안내</h2>
        <p className="desc">전국 백화점과 아울렛에서 안다르 제품을 경험하세요.<br />
          안다르만의 스토어 멤버십을 통해<br />특별한 혜택도 함께 누려보세요.
        </p>
        <span className="label_more">자세히 보기</span>
      </a>
    </main>
  );
};

export default Main;
