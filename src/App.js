import React, { useState, useRef } from "react";
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