import React from "react";

const ServiceList = () => {

  const services = [
    { name: "이용약관", href: "" },
    { name: "개인정보처리방침", href: "" },
    { name: "쇼핑몰 이용안내", href: "" },
    { name: "강사회원 신청", href: "" },
    { name: "센터회원 신청", href: "" },
  ];

  return (
    <ul className="service_list">
      {services.map((service, index) => (
        <li className="service_item" key={index}>
          <a href={service.href}>{service.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
