import "./css/index.css";
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
// 데이터 불러오기
import { items } from "./data";
// 컴포넌트 불러오기
import MainNav from "./components/MainNav";
// 페이지 불러오기
import Home from "./pages/Home";
import Doll from "./pages/Doll";
import Umbrella from "./pages/Umbrella";
import Stationery from "./pages/Stationery";
import Cart from "./pages/Cart";
import Bedding from "./pages/Bedding";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
// 타이틀 이미지 불러오기
import kakaoLogo from "./images/kakao-logo.png";
// styled-component 불러오기
import {
  MainContainer,
  MainKakaoLogo,
} from "./styled/styled-main-container/StyledMainContainer";

export default function App() {
  const [item] = useState(items);

  return (
    <MainContainer>
      <MainNav />
      <MainKakaoLogo>
        <img src={kakaoLogo} alt="카카오 로고 입니다." />
      </MainKakaoLogo>
      <Routes>
        <Route path="/" element={<Home item={item} />} />
        <Route path="/doll" element={<Doll item={item} />} />
        <Route path="/umbrella" element={<Umbrella item={item} />} />
        <Route path="/stationery" element={<Stationery item={item} />} />
        <Route path="/bedding" element={<Bedding item={item} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  );
}
