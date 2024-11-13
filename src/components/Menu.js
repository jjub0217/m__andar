import React, { useEffect, useRef, useState } from "react";



const Menu = () => {
  const shortcutItems = [
    { label: "블프 ~80%", isNew: true, isSeason: true },
    { label: "베스트", isNew: false },
    { label: "신상", isNew: true },
    { label: "우먼즈", isNew: false },
    { label: "맨즈", isNew: false },
    { label: "주니어", isNew: true },
    { label: "기모", isNew: false },
    { label: "상품권", isNew: true },
    { label: "아울렛", isNew: false },
  ];

  const allMenuItems = [
    { label: "블프 ~80%", isNew: true, isSeason: true },
    { label: "베스트", isNew: false },
    { label: "신상", isNew: true },
    { label: "우먼즈", isNew: false },
    { label: "맨즈", isNew: false },
    { label: "주니어", isNew: true },
    { label: "기모", isNew: false },
    { label: "상품권", isNew: true },
    { label: "NEW 에어엑스퍼트", isNew: false },
    { label: "워터 컬렉션", isNew: false },
    { label: "테니스", isNew: false },
    { label: "A.R.M", isNew: false },
    { label: "요기니 요가복", isNew: false },
    { label: "홈트용품&액세서리", isNew: false },
    { label: "서스테이너블", isNew: false },
    { label: "아울렛", isNew: false },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0); 
  const menuWrapRef = useRef(null);
  const allMenuArea = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newPressed = !prev;
      menuWrapRef.current.classList.toggle("is_show", newPressed);

      return newPressed;
    });
  };

  useEffect(() => {
    if (allMenuArea.current) {
      setMenuHeight(allMenuArea.current.scrollHeight); 
    }
  }, [menuHeight, isMenuOpen]); 

  return (
    <div className="menu_wrap" ref={menuWrapRef}>
      <div className="shortcut_menu_area">
        <ul className="shortcut_menu_list">
          {shortcutItems.map((item, index) => (
            <li
              key={index}
              className={`shortcut_menu_item  ${item.isNew ? "new_item" : ""} ${
                item.isNew && item.isSeason ? "season_item" : ""
              }`}
            >
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>
        <p className="all_menu_title">전체메뉴</p>
        <button
          className="all_menu_btn"
          aria-label="전체메뉴열기"
          type="button"
          aria-controls="all_menu_area"
          aria-pressed={isMenuOpen ? "true" : "false"}
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        ></button>
      </div>
      <div
        id="all_menu_area"
        className="all_menu_area"
        ref={allMenuArea}
        style={{ height: isMenuOpen ? `${menuHeight}px` : "0" }}
      >
        <ul className="all_menu_list">
          {allMenuItems.map((item, index) => (
            <li
              key={index}
              className={`all_menu_item ${item.isNew ? "new_item" : ""} ${
                item.isNew && item.isSeason ? "season_item" : ""
              }`}
            >
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
