import React, { useState, useEffect, useRef } from "react";


const Nav = ({
  expandedNavItem,
  setExpandedNavItem,
  expandedEventItem,
  setExpandedEventItems,
}) => {
  const navItems = [
    {
      id: 1,
      title: "블프 ~80%",
      isNew: true,
      isSeason: true,
      subItems: [
        "전체",
        "UP TO 80%",
        "우먼즈",
        "맨즈",
        "주니어",
        "홈트용품 & 액세서리",
      ],
    },
    {
      id: 2,
      title: "베스트",
      subItems: ["전체", "우먼즈", "맨즈"],
    },
    {
      id: 3,
      title: "신상",
      isNew: true,
      subItems: ["전체", "우먼즈", "맨즈", "홈트용품 & 액세서리"],
    },
    {
      id: 4,
      title: "우먼즈",
      subItems: [
        "전체",
        "하의",
        "상의",
        "레깅스",
        "조거팬츠",
        "쇼츠",
        "티셔츠",
        "스윔웨어",
        "원피스 / 스커트",
        "스포프 브라탑",
        "아우터",
        "세트",
        "운동별추천",
      ],
    },
    {
      id: 5,
      title: "맨즈",
      subItems: [
        "전체",
        "하의",
        "상의",
        "티셔츠",
        "슬랙스",
        "조거팬츠",
        "쇼츠",
        "청바지",
        "스윔웨어",
        "A.R.M",
        "애슬래저 비즈니스웨어",
        "아우터",
        "세트",
      ],
    },
    {
      id: 6,
      title: "주니어",
      isNew: true,
      subItems: ["전체", "남", "여"],
    },
    {
      id: 7,
      title: "기모",
      subItems: ["전체", "남", "여"],
    },
    {
      id: 8,
      title: "상품권",
      isNew: true,
      subItems: ["전체", "남", "여"],
    },
    {
      id: 9,
      title: "NEW 에어엑스퍼트",
      subItems: ["전체", "남", "여"],
    },
    {
      id: 10,
      title: "워터 컬렉션",
      subItems: ["전체", "남", "여"],
    },
    {
      id: 11,
      title: "테니스",
      subItems: ["전체", "테니스 스토리"],
    },
    {
      id: 12,
      title: "A.R.M",
      subItems: ["전체", "A.R.M 스토리"],
    },
    {
      id: 13,
      title: "요기니 요가복",
      subItems: ["전체", "하의", "상의", "용품"],
    },
    {
      id: 14,
      title: "홈트용품 / 악세사리",
      subItems: [
        "전체",
        "홈트용품",
        "삭스 / 운동화",
        "가방",
        "모자 / 헤어밴드",
        "마스크",
      ],
    },
    {
      id: 15,
      title: "서스테이너블",
      subItems: [
        "전체",
        "서스테이너블 스토리",
        "에어쿨링",
        "에어리핏",
        "멘셀 모달",
        "코르크",
      ],
    },
    {
      id: 16,
      title: "안다르 라이브",
      subItems: ["골프", "라운지"],
    },
  ];

  const eventItems = [
    {
      id: 1,
      title: "EVENT",
      link: "",
    },
    {
      id: 2,
      title: "고객지원",
      subItems: [
        "자주 묻는 질문",
        "공지사항",
        "강사회원 신청",
        "센터회원 신청",
        "전국 매장 안내",
        "세탁 방법 안내",
      ],
    },
    {
      id: 3,
      title: "안다르 스토리",
      subItems: ["안다르 매거진", "브랜드 스토리"],
    },
  ];

  const navItemsRef = useRef([]);
  const [navSubListHeights, setNavSubListHeights] = useState({});
  const eventItemsRef = useRef([]);
  const [eventSubListHeights, setEventSubListHeights] = useState({});

  const toggleExpandedItem = (id, setItems) => {
    setItems((prev) => {
      if (prev.includes(id)) {
        const updated = prev.filter((itemId) => {
          return itemId !== id;
        });
        return updated;
      }
      const updated = [...prev, id];
      return updated;
    });
  };

  const calculateHeight = (ref, items, heights, setHeights) => {
    ref.current.forEach((subList, index) => {
      if (subList && !heights[items[index].id]) {
        setHeights((prevHeights) => ({
          ...prevHeights,
          [items[index].id]: subList.scrollHeight,
        }));
      }
    });
  };

  useEffect(() => {
    calculateHeight(
      navItemsRef,
      setNavSubListHeights
    );
    calculateHeight(
      eventItemsRef,
      setEventSubListHeights
    );
  }, [expandedNavItem, expandedEventItem]);


  return (
    <>
      <ul className="nav_list">
        {navItems.map((item, index) => (
          <li key={item.id} className="nav_item">
            <button
              type="button"
              className={`nav_item_title ${item.isSeason ? "season_item" : ""}`}
              aria-pressed={
                expandedNavItem.includes(item.id) ? "true" : "false"
              }
              aria-expanded={
                expandedNavItem.includes(item.id) ? "true" : "false"
              }
              onClick={() => toggleExpandedItem(item.id, setExpandedNavItem)}
            >
              {item.isNew && <span className="new_item"> {item.title}</span>}
              {!item.isNew && item.title}
            </button>
            <ul
              className="sub_list"
              ref={(el) => (navItemsRef.current[index] = el)}
              style={{
                height: expandedNavItem.includes(item.id)
                  ? `${navSubListHeights[item.id]}px`
                  : "0",
              }}
            >
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="sub_item">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="">{subItem}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul className="nav_list event_list">
        {eventItems.map((item, index) =>
          item.subItems ? (
            <li key={item.id} className="nav_item">
              <button
                type="button"
                className="nav_item_title"
                aria-pressed={
                  expandedEventItem.includes(item.id) ? "true" : "false"
                }
                aria-expanded={
                  expandedEventItem.includes(item.id) ? "true" : "false"
                }
                onClick={() =>
                  toggleExpandedItem(item.id, setExpandedEventItems)
                }
              >
                {item.title}
              </button>
              <ul
                className="sub_list"
                ref={(el) => (eventItemsRef.current[index] = el)}
                style={{
                  height: expandedNavItem.includes(item.id)
                    ? `${eventSubListHeights[item.id]}px`
                    : "0",
                }}
              >
                {item.subItems &&
                  item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="sub_item">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="">{subItem}</a>
                    </li>
                  ))}
              </ul>
            </li>
          ) : (
            <li key={item.id} className="nav_item event_item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="" className="nav_item_title">
                EVENT
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Nav;
