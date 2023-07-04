import { useNavigate } from "react-router-dom";
import { useState } from "react";
// 로고 이미지 불러오기
import mainLogo from "./../images/main-logo.png";
// styled-components 불러오기
import {
  MainNavContainer,
  NavTitle,
  NavMenu,
  NavOthers,
} from "../styled/styled-navbar/StyledNavbar";
import { items } from "../data";

const MainNav = ({ item, setItem, show, setShow }) => {
  const navigate = useNavigate();

  const allFilter = items;
  const dollFilter = items.filter((a) => a.category === "doll");
  const umbFilter = items.filter((a) => a.category === "umbrella");
  const staFilter = items.filter((a) => a.category === "stationery");
  const bedFilter = items.filter((a) => a.category === "bedding");

  const handleFilter = (filter) => {
    setItem(filter);
  };

  const handleOpacityEffect = () => {
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);
      clearTimeout(timer);
    }, 500);
  };

  return (
    <MainNavContainer>
      <NavTitle onClick={() => {}}>
        <h1>Ryan Shop</h1>
        <img src={mainLogo} alt="카카오 캐릭터 로고 이미지입니다." />
      </NavTitle>
      <NavMenu active={show}>
        <li
          onClick={() => {
            handleFilter(allFilter);
            handleOpacityEffect();
          }}
        >
          홈
        </li>
        <li
          onClick={() => {
            handleFilter(dollFilter);
            handleOpacityEffect();
          }}
        >
          인형
        </li>
        <li
          onClick={() => {
            handleFilter(umbFilter);
            handleOpacityEffect();
          }}
        >
          우산
        </li>
        <li
          onClick={() => {
            handleFilter(staFilter);
            handleOpacityEffect();
          }}
        >
          문구류
        </li>
        <li
          onClick={() => {
            handleFilter(bedFilter);
            handleOpacityEffect();
          }}
        >
          침구류
        </li>
      </NavMenu>
      <NavOthers>
        <li>🔔</li>
        <li
          onClick={() => {
            navigate("/cart");
          }}
        >
          🛒
        </li>
        <li
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          👤
        </li>
      </NavOthers>
    </MainNavContainer>
  );
};

export default MainNav;
