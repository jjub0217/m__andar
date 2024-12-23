import React, { useState } from "react";
import BestTab from "./BestTab";
import ContentBest from "./ContentBest";


const SectionBest = ({ title, products }) => {
  const [activeTab, setActiveTab] = useState("best1"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="section_best">
      <h2 className="headline">{title}</h2>
      <BestTab activeTab={activeTab} onTabClick={handleTabClick} />
      <ContentBest activeTab={activeTab} products={products} />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="" className="link_all">
        <strong className="category">베스트</strong>
        전체보기
      </a>
    </section>
  );
};

export default SectionBest;