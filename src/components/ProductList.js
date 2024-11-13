import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ProductItem from "./ProductItem";

const ProductList = ({ data, className }) => {

  return (
    <ul className={`${className}list`}>
      {data.map((product, index) => (
        <li className={`${className}item`} key={index}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
