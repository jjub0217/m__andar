import React from "react";
import ProductList from "./ProductList";

const ContentLookBook = ({ data }) => {
  return (
    <div className="lookbook_contents">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="" className="link_lookbook">
        <div className="text_box">
          <h3 className="headline">
            {data.title.split("\n").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </h3>
          <p className="desc">
            {data.description.split("\n").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </p>
        </div>
        <div className="image_box">
          <picture>
            <source srcSet={data.webpSrc} type="image/webp" />
            <img src={data.imgSrc} alt={data.altText} />
          </picture>
        </div>
        <span className="label_more">보러가기</span>
      </a>
      <ProductList data={data.products} className="product_" />
    </div>
  );
};

export default ContentLookBook;
