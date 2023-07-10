import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
// toggle button
import { NavToggleBtn } from "../styled/styled-navbar/StyledNavToggle";
// rtk...
import { changeTitle } from "../store/titleSlice";
import { setItemShow, setItemShowTrue } from "../store/itemShowSlice";
import { setBtnRotate } from "../store/btnRotateSlice";

const MainNav = ({ item, setItem }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const itemShow = useSelector((state) => state.itemShow.status);
  const btnRotate = useSelector((state) => state.btnRotate.status);

  const handleToggleBtn = () => {
    dispatch(setBtnRotate());
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
    dispatch(setItemShow());
    const timer = setTimeout(() => {
      dispatch(setItemShowTrue());
      clearTimeout(timer);
    }, 500);
  };

  const handleTitle = (val) => {
    dispatch(changeTitle(val));
  };

  return (
    <MainNavContainer>
      <NavTitle
        onClick={() => {
          navigate("/");
          handleFilter(allFilter);
          handleOpacityEffect();
          handleTitle("ホーム");
        }}
      >
        <h1>Ryan Shop</h1>
        <img src={mainLogo} alt="カカオのロゴイメージです。" />
      </NavTitle>
      <NavMenu active={itemShow} visible={btnRotate}>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(allFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("ホーム");
          }}
        >
          ホーム
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(dollFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("ぬいぐるみ");
          }}
        >
          ぬいぐるみ
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(umbFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("傘");
          }}
        >
          傘
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(staFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("文具");
          }}
        >
          文具
        </li>
        <li
          onClick={() => {
            navigate("/");
            handleFilter(bedFilter);
            handleOpacityEffect();
            handleToggleBtn();
            handleTitle("寝具");
          }}
        >
          寝具
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
