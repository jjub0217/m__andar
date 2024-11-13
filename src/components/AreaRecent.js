import React from "react";
import ProductList from "./ProductList";


const AreaRecent = () => {

  const recentItemsData = [
    {
      imgSrc: require("../images/img_leggins_knee_signature_womans.jpg"),
      altText: "에어쿨링 지니 바이커 5부 레깅스",
    },
    {
      imgSrc: require("../images/img_tshirt_air_womans.jpg"),
      altText: "NEW 에어리핏 오버핏 티셔츠",
    },
    {
      imgSrc: require("../images/img_leggins_brushed_eurosense_womans.jpg"),
      altText: "NEW 기모 유로센스 레깅스",
    },
  ];
  
  return (
    <article className="recent_area">
      <h2 className="headline">최근 본 상품</h2>
      <ProductList data={recentItemsData} className="recent_" />
      <a href="" className="link_all">
        전체보기
      </a>
    </article>
  );
};

export default AreaRecent;
