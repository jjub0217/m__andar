import React from "react";
import ProductItem from "./ProductItem";


const AreaEvent = () => {

  const eventItemsData = [
    {
      title: "썸머 시즌오프 UP TO 80%",
      description: "올여름 마지막 쇼핑 찬스",
      imgSrc: require("../images/img_event_item1.jpg"),
      altText: "썸머시즌오프 up to 80%",
    },
    {
      title: "안다르 워터 컬렉션",
      description: "액티브한 고기능성과 하이엔드 감성의 만남",
      imgSrc: require("../images/img_event_item2.jpg"),
      altText: "안다르 워터 컬렉션",
    },
  ];
  
  return (
    <article className="event_area">
      <h2 className="headline">이벤트</h2>
      {eventItemsData.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </article>
  );
};

export default AreaEvent;
