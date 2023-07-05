import "./css/index.css";
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
// 데이터 불러오기
import { items } from "./data";
// 컴포넌트 불러오기
import MainNav from "./components/MainNav";
// 페이지 불러오기
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
// 타이틀 이미지 불러오기
import kakaoLogo from "./images/kakao-logo.png";
// styled-component 불러오기
import {
  MainContainer,
  MainKakaoLogo,
} from "./styled/styled-main-container/StyledMainContainer";
import Footer from "./components/Footer";

export default function App() {
  const [item, setItem] = useState(items);
  const [show, setShow] = useState(true);

  const [title, setTitle] = useState("모든상품");

  return (
    <MainContainer>
      <MainNav
        item={item}
        setItem={setItem}
        show={show}
        setShow={setShow}
        title={title}
        setTitle={setTitle}
      />
      <MainKakaoLogo>
        <img src={kakaoLogo} alt="카카오 로고 입니다." />
      </MainKakaoLogo>
      <Routes>
        <Route
          path="/"
          element={<Home item={item} show={show} title={title} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MainContainer>
  );
}
