import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem"; 

const SectionProduct = ({ title, products }) => {

  return (
    <section className="section_product">
      <h2 className="headline">{title}</h2>
      <Swiper spaceBetween={10} slidesPerView={2.2} wrapperClass="product_list">
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="" className="link_more">
        더보기
      </a>
    </section>
  );
};

export default SectionProduct;
