import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Nav from "./Nav";
import AreaEvent from "./AreaEvent";
import AreaRecent from "./AreaRecent";


const Header = ({
  toggleGnb,
  isGnbVisible,
  handleMenuClose,
  burgerBtnRef,
  gnbRef,
}) => {

  const [scrollTop, setScrollTop] = useState(false);
  const [expandedNavItem, setExpandedNavItem] = useState([null]);
  const [expandedEventItem, setExpandedEventItems] = useState([null]); 
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchBtnRef = useRef(null);
  const inputSearchAreaRef = useRef(null);


  const toggleSearch = () => {
    setIsSearchVisible((prev) => {
      const newExpand = !prev;
      document.body.classList.toggle("scroll_hide", newExpand);
      inputSearchAreaRef.current.classList.toggle("is_show");
      return newExpand;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={`header ${scrollTop ? "scrollTop" : ""}`}>
      <div className="logo_wrap">
        <h1 className="logo">
          <Link to="/">
            <span className="blind">메인</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="21"
              viewBox="0 0 80 21"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.0869 5.86882C47.8839 6.25103 48.5762 6.75112 49.1488 7.36194H49.1525V0.5H51.6935V20.1642H49.1525V18.2282C48.5837 18.8461 47.8952 19.3498 47.1056 19.732C46.0465 20.2428 44.8977 20.5 43.6815 20.5C42.1734 20.5 40.7738 20.1571 39.5165 19.482C38.2591 18.8068 37.2524 17.871 36.5227 16.7065C35.7967 15.5384 35.4263 14.2167 35.4263 12.7772C35.4263 11.3519 35.8042 10.0374 36.5527 8.86935C37.2936 7.70486 38.3077 6.77612 39.5688 6.10814C40.8262 5.44374 42.2071 5.10439 43.6777 5.10439C44.8752 5.10439 46.0203 5.36158 47.0869 5.86882ZM46.4918 8.09064C45.6386 7.60127 44.6844 7.35122 43.6553 7.35122C42.585 7.35122 41.6083 7.59055 40.7476 8.06921C39.8832 8.54787 39.1984 9.2087 38.7119 10.0374C38.2217 10.8697 37.9709 11.8163 37.9709 12.8558C37.9709 13.8595 38.2217 14.7811 38.7119 15.5956C39.1984 16.4064 39.8832 17.0637 40.7476 17.5388C41.6083 18.0138 42.6 18.2567 43.6852 18.2567C44.6994 18.2567 45.6386 18.0103 46.4844 17.528C47.3301 17.0422 48.0112 16.3778 48.5089 15.5563C49.0066 14.7347 49.2611 13.8167 49.2611 12.8308C49.2611 11.8592 49.0103 10.9412 48.5201 10.0981C48.0261 9.25871 47.3451 8.58359 46.4918 8.09064ZM13.725 7.37263C13.1823 6.76538 12.52 6.26886 11.7454 5.88665C10.6975 5.3687 9.52251 5.10437 8.25391 5.10437C6.78699 5.10437 5.40239 5.44372 4.14502 6.10812C2.88765 6.77967 1.87352 7.70841 1.12883 8.86933C0.3804 10.0374 0.00244141 11.3519 0.00244141 12.7772C0.00244141 14.2167 0.372916 15.5384 1.0989 16.7064C1.82862 17.8745 2.83526 18.8068 4.09263 19.4819C5.35 20.1571 6.74956 20.5 8.25766 20.5C9.50754 20.5 10.6751 20.2392 11.7229 19.7177C12.5013 19.3319 13.1711 18.8354 13.7287 18.2317V20.1642H16.2696V5.46515H13.7287V7.37263H13.725ZM13.0925 10.0981C13.5828 10.9376 13.8335 11.8591 13.8335 12.8272C13.8335 13.8131 13.579 14.7311 13.0813 15.5527C12.5836 16.3742 11.9025 17.0386 11.0531 17.5244C10.2111 18.0067 9.26804 18.2532 8.25766 18.2532C7.1874 18.2532 6.20321 18.0138 5.33128 17.5459C4.45936 17.0779 3.7708 16.4243 3.28432 15.6027C2.7941 14.7811 2.54337 13.8524 2.54337 12.8486C2.54337 11.8127 2.79784 10.8625 3.29555 10.0303C3.79325 9.20153 4.48181 8.53713 5.34625 8.06204C6.21069 7.58696 7.17991 7.34406 8.22772 7.34406C9.26056 7.34406 10.2148 7.5941 11.068 8.08347C11.9212 8.58356 12.6023 9.25868 13.0925 10.0981ZM29.921 5.97238C28.8657 5.39728 27.6121 5.10794 26.1976 5.10794C25.1722 5.10794 24.2142 5.30798 23.3535 5.70805C22.766 5.97595 22.1673 6.38674 21.7631 6.78324V5.46515H19.2222V20.1642H21.7631V11.877C21.7631 10.5553 22.2346 9.45515 23.0317 8.60857C23.8288 7.76199 24.8728 7.3512 26.2238 7.3512C27.0433 7.3512 27.7955 7.53695 28.4616 7.9013C29.1277 8.26565 29.6404 8.7836 30.0221 9.48372C30.4 10.1803 30.5946 11.0304 30.5946 12.0056V20.1678H33.1243V12.0056C33.1243 10.6625 32.9185 9.45514 32.3647 8.41925C31.7996 7.37263 30.98 6.55106 29.921 5.97238ZM67.717 7.37263C67.1744 6.76538 66.512 6.26886 65.7374 5.88665C64.6896 5.3687 63.5145 5.10437 62.2459 5.10437C60.7753 5.10437 59.3944 5.44372 58.137 6.10812C56.8759 6.7761 55.8618 7.70483 55.1171 8.86933C54.3687 10.0374 53.9907 11.3519 53.9907 12.7772C53.9907 14.2167 54.3612 15.5384 55.0872 16.7064C55.8169 17.8709 56.8235 18.8068 58.0809 19.4819C59.3383 20.1571 60.7378 20.5 62.2459 20.5C63.4958 20.5 64.6634 20.2392 65.7112 19.7177C66.4895 19.3319 67.1594 18.8354 67.717 18.2317V20.1642H70.2579V5.46515H67.717V7.37263ZM67.0845 10.0981C67.5785 10.9376 67.8255 11.8591 67.8255 12.8272C67.8255 13.8131 67.571 14.7311 67.0733 15.5527C66.5756 16.3742 65.8945 17.0386 65.0451 17.5244C64.2031 18.0067 63.2638 18.2532 62.2497 18.2532C61.1794 18.2532 60.1952 18.0138 59.3233 17.5459C58.4514 17.0779 57.7628 16.4243 57.2763 15.6027C56.7861 14.7811 56.5354 13.8524 56.5354 12.8486C56.5354 11.8127 56.7899 10.8625 57.2876 10.0303C57.7853 9.20153 58.4738 8.53713 59.3383 8.06204C60.2027 7.58696 61.1719 7.34406 62.2197 7.34406C63.2526 7.34406 64.2068 7.5941 65.06 8.08347C65.9133 8.58356 66.5943 9.25868 67.0845 10.0981ZM75.7504 5.46519V7.23693C76.6635 5.74381 78.1117 5.16156 79.9978 5.15799V7.76203C78.6169 7.76203 77.483 8.15495 76.7945 8.8908C76.0984 9.63379 75.7504 10.734 75.7504 12.1414V20.1642H73.2095V5.46519H75.7504Z"
                fill="#fff"
              />
            </svg>
          </Link>
        </h1>
        <div className="tools_area">
          <button
            className="burger_btn"
            aria-label="메뉴"
            aria-pressed={isGnbVisible ? "true" : "false"}
            aria-expanded={isGnbVisible ? "true" : "false"}
            type="button"
            aria-controls="gnb"
            onClick={toggleGnb}
            ref={burgerBtnRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 0.5H0V2H20V0.5ZM20 7.75H0V9.25H20V7.75ZM0 15H16V16.5H0V15Z"
                fill="#fff"
              />
            </svg>
          </button>
          <button
            className="search_btn"
            aria-label="검색"
            aria-controls="input_search_area"
            aria-pressed={isSearchVisible ? "true" : "false"}
            aria-expanded={isSearchVisible ? "true" : "false"}
            ref={searchBtnRef}
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
            >
              <path
                d="M20 19.2906L15.1854 14.476C16.3833 12.9929 17.1135 11.1104 17.1135 9.05676C17.1135 4.33343 13.2801 0.5 8.55676 0.5C3.83343 0.5 0 4.33343 0 9.05676C0 13.7801 3.83343 17.6135 8.55676 17.6135C10.6104 17.6135 12.4929 16.8833 13.976 15.6854L18.7906 20.5L20 19.2906ZM1.71135 9.05676C1.71135 5.28038 4.78038 2.21135 8.55676 2.21135C12.3331 2.21135 15.4022 5.28038 15.4022 9.05676C15.4022 12.8331 12.3331 15.9022 8.55676 15.9022C4.78038 15.9022 1.71135 12.8331 1.71135 9.05676Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="tools_area">
          <Link to="/" className="link_cart">
            <span className="blind">장바구니</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
            >
              <path
                d="M18.8889 4.94444H14.9444C14.6667 2.44444 12.5778 0.5 10 0.5C7.42222 0.5 5.33333 2.44444 5.05556 4.94444H1.11111L0 20.5H20L18.8889 4.94444ZM10 2.16667C11.6444 2.16667 13.0111 3.37778 13.2778 4.94444H6.72222C6.98889 3.37778 8.35556 2.16667 10 2.16667ZM1.78889 18.8333L2.66667 6.61111H5V8.83333H6.66667V6.61111H13.3333V8.83333H15V6.61111H17.3333L18.2111 18.8333H1.78889Z"
                fill="#fff"
              />
            </svg>
            <span className="count">0</span>
          </Link>
          <Link to="/" className="link_profile">
            <span className="blind">내 정보</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
            >
              <path
                d="M12.5889 10.0334C14.0333 9.15561 15 7.58894 15 5.77783C15 3.01117 12.7667 0.777832 10 0.777832C7.23333 0.777832 5 3.01117 5 5.77783C5 7.58894 5.96667 9.15561 7.41111 10.0334C3.14444 11.2445 0 15.3334 0 20.2223H1.66667C1.66667 15.3223 5.4 11.3334 10 11.3334C14.6 11.3334 18.3333 15.3223 18.3333 20.2223H20C20 15.3334 16.8556 11.2445 12.5889 10.0334ZM10 2.4445C11.8333 2.4445 13.3333 3.9445 13.3333 5.77783C13.3333 7.61117 11.8333 9.11117 10 9.11117C8.16667 9.11117 6.66667 7.61117 6.66667 5.77783C6.66667 3.9445 8.16667 2.4445 10 2.4445Z"
                fill="#fff"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Menu />
      <form className="input_search_area" ref={inputSearchAreaRef}>
        <fieldset className="fieldset">
          <legend className="blind">검색폼</legend>
          <button
            className="search_area_close_btn"
            aria-label="닫기버튼"
          ></button>
          <div className="input_area">
            <input
              type="text"
              id="search"
              className="input"
              title="검색어를 입력해주세요."
              placeholder="검색어를 입력해주세요"
              aria-live="assertive"
              aria-atomic="false"
            />
            <button className="input_btn" aria-label="검색버튼"></button>
          </div>
          <label htmlFor="search">
            <span className="blind">검색</span>
          </label>
        </fieldset>
      </form>
      <nav className={`gnb ${isGnbVisible ? "is_show" : ""}`} ref={gnbRef}>
        <div className="login_wrap">
          <div className="login_link_area">
            <a href="" className="link_login">
              로그인
            </a>
            <a href="" className="link_login">
              회원가입
            </a>
          </div>
          <p className="desc">
            로그인 하고,
            <strong className="member_benefit">&nbsp;회원 전용 혜택</strong>
            &nbsp;확인하기
          </p>
        </div>
        <div className="nav_area">
          <Nav
            expandedNavItem={expandedNavItem}
            setExpandedNavItem={setExpandedNavItem}
            expandedEventItem={expandedEventItem}
            setExpandedEventItems={setExpandedEventItems}
          />
          <AreaEvent />
          <div className="brand_info_area">
            <a href="" className="brand_info_link">
              브랜드 스토리
            </a>
            <a href="" className="brand_info_link">
              전국매장안내
            </a>
          </div>
          <AreaRecent />
        </div>
        <button
          type="button"
          className="gnb_close_btn"
          aria-label="메뉴닫기"
          aria-pressed="false"
          onClick={handleMenuClose}
        ></button>
      </nav>
    </header>
  );
};

export default Header;
