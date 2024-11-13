import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const BestTab = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: "best1", label: "전체" },
    { id: "best2", label: "우먼즈" },
    { id: "best3", label: "맨즈" },
    { id: "best4", label: "홈트용품 & ACC" },
  ];
  return (
    <div className="tab_area">
      <ul role="tablist" className="tab_list">
        {tabs.map((tab) => (
          <li role="none" key={tab.id}>
            <button
              role="tab"
              className="tab_item_title"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => onTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestTab;
