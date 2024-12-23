import React, { useState, useRef, useEffect } from "react";
import imgVisualJpeg from "./images/img_visual_item1.jpeg";
import imgVisualWebp from "./images/img_visual_item1.webp";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {
    const [isGnbVisible, setIsGnbVisible] = useState(false);
    const dimmedRef = useRef(null);
    const burgerBtnRef = useRef(null);
    const gnbRef = useRef(null);

    const toggleGnb = () => {
      setIsGnbVisible((prev) => {
        const newExpand = !prev;
        document.body.classList.toggle("scroll_hide", newExpand);
        dimmedRef.current.classList.toggle("is_active", newExpand);
        return newExpand;
      });
    };

    const handleMenuClose = () => {
      toggleGnb(false);
    };

useEffect(() => {
  // Preload JPEG 이미지 추가
  const preloadJpeg = document.createElement("link");
  preloadJpeg.rel = "preload";
  preloadJpeg.as = "image";
  preloadJpeg.href = imgVisualJpeg;
  preloadJpeg.type = "image/jpeg"; // MIME 타입 설정
  document.head.appendChild(preloadJpeg);

  // Preload WebP 이미지 추가
  const preloadWebp = document.createElement("link");
  preloadWebp.rel = "preload";
  preloadWebp.as = "image";
  preloadWebp.href = imgVisualWebp;
  preloadWebp.type = "image/webp"; // MIME 타입 설정
  document.head.appendChild(preloadWebp);

  return () => {
    // Cleanup: 추가된 preload 태그 제거
    document.head.removeChild(preloadJpeg);
    document.head.removeChild(preloadWebp);
  };
}, []);

  return (
    <div className="wrapper">
      <div
        className="dimmed"
        aria-hidden={!isGnbVisible ? "true" : "false"}
        ref={dimmedRef}
        onClick={handleMenuClose}
      ></div>
      <Header
        toggleGnb={toggleGnb}
        handleMenuClose={handleMenuClose}
        isGnbVisible={isGnbVisible}
        setIsGnbVisible={setIsGnbVisible}
        burgerBtnRef={burgerBtnRef}
        gnbRef={gnbRef}
      />
      <Main />
      <Footer />
    </div>
  );
}


export default App;