import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ProductItem from "./ProductItem";

const ContentBest = ({ activeTab, products }) => {
  return (
    <div role="tabpanel" className="best_contents">
      <ul
        className={`product_list ${activeTab === "best1" ? "is_show" : ""}`}
        id="best1"
      >
        {products.best1.map((product, index) => (
          <li className="product_item" key={index}>
            <ProductItem product={product} rank={index + 1} />
          </li>
        ))}
      </ul>
      <ul
        className={`product_list ${activeTab === "best2" ? "is_show" : ""}`}
        id="best2"
      >
        {products.best2.map((product, index) => (
          <li className="product_item" key={index}>
            <ProductItem product={product} rank={index + 1} />
          </li>
        ))}
      </ul>
      <ul
        className={`product_list ${activeTab === "best3" ? "is_show" : ""}`}
        id="best3"
      >
        {products.best3.map((product, index) => (
          <li className="product_item" key={index}>
            <ProductItem product={product} rank={index + 1} />
          </li>
        ))}
      </ul>
      <ul
        className={`product_list ${activeTab === "best4" ? "is_show" : ""}`}
        id="best4"
      >
        {products.best4.map((product, index) => (
          <li className="product_item" key={index}>
            <ProductItem product={product} rank={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBest;
