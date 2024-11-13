import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

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


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;