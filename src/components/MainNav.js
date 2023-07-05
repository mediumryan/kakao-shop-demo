import { useNavigate } from "react-router-dom";
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
import { NavToggleBtn } from "../styled/styled-navbar/StyledNavToggle";
import { useState } from "react";

const MainNav = ({ item, setItem, show, setShow, title, setTitle }) => {
  const navigate = useNavigate();
  const [btnRotate, setBtnRotate] = useState(false);

  const handleToggleBtn = () => {
    setBtnRotate(!btnRotate);
  };

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

  const handleTitle = (val) => {
    let copy = [...title];
    copy = val;
    setTitle(copy);
  };

  return (
    <MainNavContainer>
      <NavTitle
        onClick={() => {
          navigate("/");
          handleFilter(allFilter);
          handleOpacityEffect();
          handleTitle("모든상품");
        }}
      >
        <h1>Ryan Shop</h1>
        <img src={mainLogo} alt="카카오 캐릭터 로고 이미지입니다." />
      </NavTitle>
      <NavMenu active={show} visible={btnRotate}>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(allFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("모든상품");
          }}
        >
          홈
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(dollFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("인형");
          }}
        >
          인형
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(umbFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("우산");
          }}
        >
          우산
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(staFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("문구류");
          }}
        >
          문구류
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(bedFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("침구류");
          }}
        >
          침구류
        </li>
      </NavMenu>
      <NavOthers visible={btnRotate}>
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
      <NavToggleBtn rotated={btnRotate} onClick={handleToggleBtn} />
    </MainNavContainer>
  );
};

export default MainNav;
