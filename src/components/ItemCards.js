import { useState, useEffect } from "react";
// 컴포넌트 불러오기
import AddToModal from "./AddToModal";
import DetailModal from "./DetailModal";
// styled-components 불러오기
import {
  SectionCards,
  CardsImgContainer,
  CardsDescription,
  CardTitlePrice,
  CardCartIcon,
  CardIndex,
} from "../styled/common-section-style/SectionCards";

const ItemCards = ({ item, index }) => {
  const [show, setShow] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  useEffect(() => {
    if (show === true) {
      const a = setTimeout(() => {
        setShow(!show);
      }, 2000);
      return () => clearTimeout(a);
    }
  }, [show]);

  function handleAddToBtn() {
    // UI 핸들링
    setShow(!show);
    // 로컬 저장소 값 가져오기
    const localCart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(localCart);
    // 로컬스토리지에 상품 정보가 없다면 item 추가 후 저장
    if (!localCart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      // 로컬스토리지에 상품 정보가 있다면 중복 확인
      const found = parsedCart.findIndex((a) => a.id == item.id);
      // 중복값이 없다면 item 추가 후 저장
      if (found == -1) {
        parsedCart.push(item);
        localStorage.setItem("cart", JSON.stringify(parsedCart));
        // 중복값이 있다면 findIndex에서 구한 값으로 해당 요소의 개수만 증가
      } else {
        parsedCart[found].quantity++;
        localStorage.setItem("cart", JSON.stringify(parsedCart));
      }
    }
  }

  function handleModal(e) {
    setDetailModal(!detailModal);
  }

  return (
    <SectionCards>
      <CardsImgContainer>
        <img
          className="img"
          alt="상품 이미지 입니다."
          src={item.image_path}
          onClick={handleModal}
        />
      </CardsImgContainer>
      <CardsDescription>
        <CardTitlePrice>
          <span className="cards-name">{item.name}</span>
          <span>{item.price.toLocaleString()}원</span>
        </CardTitlePrice>
        <CardCartIcon>
          <span className="cards-cart" onClick={handleAddToBtn}>
            🛒
          </span>
        </CardCartIcon>
      </CardsDescription>
      <CardIndex>{index + 1}</CardIndex>
      {show === true && <AddToModal show={show} setShow={setShow} />}
      {detailModal == true && (
        <DetailModal
          item={item}
          detailModal={detailModal}
          setDetailModal={setDetailModal}
        />
      )}
    </SectionCards>
  );
};

export default ItemCards;
