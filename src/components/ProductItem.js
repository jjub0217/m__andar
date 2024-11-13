import React from "react";

const ProductItem = ({ product, rank}) => {
  return (
    <a href="" className="link_item">
      {product.title ? (
        <div className="text_box">
          <strong className="title">{product.title}</strong>
          {product.description ? (
            <>
              <p className="desc">{product.description}</p>
              <span className="label_more">전체</span>
            </>
          ) : null}
          {!product.description ? (
            <div className="price_area">
              {product.discount ? (
                <strong className="price_discount">
                  <span className="blind">할인율</span>
                  {product.discount}%
                </strong>
              ) : null}
              <span className="price_cur">
                <span className="blind">할인가격</span>
                {product.currentPrice.toLocaleString()}원
              </span>
              {product.originalPrice ? (
                <span className="price_origin">
                  <span className="blind">원래 가격</span>
                  {product.originalPrice.toLocaleString()}원
                </span>
              ) : null}
            </div>
          ) : null}
          {product.tags ? (
            <div className="tag_area">
              {product.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="image_box">
        <span className="count" aria-label={`${rank}위`}>
          {rank}
        </span>
        {product.badgeImgSrc ? (
          <div className="badge">
            <img src={product.badgeImgSrc} alt={product.badgeAltText} />
          </div>
        ) : null}
        <img src={product.imgSrc} alt={product.altText} />
      </div>
    </a>
  );
};

export default ProductItem;
