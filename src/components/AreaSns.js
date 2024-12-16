// src/components/RecentArea.js
import React from "react";
import ProductList from "./ProductList";



const AreaSns = () => {
  const snsLinks = [
    { href: "", label: "페이스북", className: "link_facebook" },
    { href: "", label: "유튜브", className: "link_youtube" },
    { href: "", label: "인스타그램", className: "link_instagram" },
  ];


  return (
    <div className="sns_area">
      <ul className="sns_list">
        {snsLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={link.className}aria-label={link.label}>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AreaSns;
