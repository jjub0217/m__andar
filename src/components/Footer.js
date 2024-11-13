import React from "react";
import AreaSns from "./AreaSns";
import ServiceList from "./ServiceList";
import MarkList from "./MarkList";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="logo_area">
        <a href="" className="link_main">
          <span className="blind">안다르</span>
        </a>
        <p className="desc">
          애슬래저 1위, 2023 대한민국 패션품질대상
          <br />
          스포츠 애슬래저 부문
        </p>
      </div>
      <div className="support_area">
        <strong className="title">고객센터</strong>
        <a href="tel:+1566-7318" className="support_tel">
          1566-7318
        </a>
        <p className="support_time">
          평일 AM 10:00 ~ PM 05:30 / 주말, 공휴일 휴무 <br />
          점심 PM 12:00 ~ PM 01:00
        </p>
      </div>
      <AreaSns />
      <ServiceList/>
      <address className="info_area">
        <span className="info_item">주식회사 안다르</span>
        <span className="info_item">대표이사 : 박효영</span>
        <span className="info_item">사업자등록번호 : 103-88-00990</span>
        <p>통신판매업신고 : 2021-서울마포-3979</p>
        <p>
          주소 : 03924 서울특별시 마포구 월드컵북로54길 25(상암동) 11층(S-City)
        </p>
        <a href="tel:+070-7733-1029">TEL :&nbsp;1566-7318</a>
        <span>호스팅제공자 : 카페24㈜</span>
        <a href="mailto:help@andar.co.kr" className="email">
          이용 문의 :&nbsp;help@andar.co.kr
        </a>
        <a href="mailto:partnership@andar.co.kr" className="email">
          마케팅 문의 :&nbsp;partnership@andar.co.kr
        </a>
        <a href="mailto:overseas@andar.co.kr" className="email">
          해외수출 문의 :&nbsp;overseas@andar.co.kr
        </a>
        <small className="copy">
          Copyright by <span className="brand">&nbsp;안다르</span>. &nbsp;all
          rights reserved.
        </small>
      </address>
      <MarkList />
    </footer>
  );
};


export default Footer;
