import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ProductList from "./ProductList";

const ContentLookBook = ({ data }) => {
  return (
    <div className="lookbook_contents">
      <a href="" className="link_lookbook">
        <div className="text_box">
          <h3 className="headline">
            {data.title.split("\n").map((text, i) => (
              <span key={i}>
                {text}
                <br />
              </span>
            ))}
          </h3>
          <p className="desc">
            {data.description.split("\n").map((text, i) => (
              <span key={i}>
                {text}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="image_box">
          <img src={data.imgSrc} alt={data.altText} />
        </div>
        <span className="label_more">보러가기</span>
      </a>
      <ProductList data={data.products} className="product_" />
    </div>
  );
};

export default ContentLookBook;
