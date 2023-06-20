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
import { NavToggleBtn } from "../styled/styled-navbar/StyledNavToggle";

const MainNav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MainNavContainer>
      <NavTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>Ryan Shop</h1>
        <img src={mainLogo} alt="카카오 캐릭터 로고 이미지입니다." />
      </NavTitle>
      <NavMenu show={toggle}>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </li>
        <li
          onClick={() => {
            navigate("/doll");
          }}
        >
          인형
        </li>
        <li
          onClick={() => {
            navigate("/umbrella");
          }}
        >
          우산
        </li>
        <li
          onClick={() => {
            navigate("/stationery");
          }}
        >
          문구류
        </li>
        <li
          onClick={() => {
            navigate("/bedding");
          }}
        >
          침구류
        </li>
      </NavMenu>
      <NavOthers show={toggle}>
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
      <NavToggleBtn onClick={handleToggle}>☰</NavToggleBtn>
    </MainNavContainer>
  );
};

export default MainNav;
