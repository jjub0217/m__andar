import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ProductItem from "./ProductItem";

const MarkList = () => {
  const marks = [
    {
      href: "",
      label: "공정거래위원회",
      className: "link_mark certification",
    },
    { href: "", label: "symantec", className: "link_mark symantec" },
    { href: "", label: "kg", className: "link_mark kg" },
  ];

  return (
    <ul className="mark_list">
      {marks.map((mark, index) => (
        <li className="mark_item" key={index}>
          <a href={mark.href} className={mark.className}>
            <span className="blind">{mark.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MarkList;
