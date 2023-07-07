import { useState } from "react";
// 컴포넌트 불러오기
import DetailAddToModal from "./DetailAddToModal";
// styled-components 불러오기
import {
  DetailModalContainer,
  DetailOverview,
  DetailPreview,
  DetailImgContainer,
  DetailDescription,
  PreviewItems,
  DetailCloseButton,
} from "../styled/styled-detail/StyledDetailContainer";

const DetailModal = ({ item, detailModal, setDetailModal }) => {
  const [detailImgArr] = useState([
    { id: "00", value: "0" },
    { id: "01", value: "1" },
    { id: "02", value: "2" },
  ]);

  const [detailAddTo, setDetailAddTo] = useState(false);

  function handleAddToBtn() {
    setDetailAddTo(!detailAddTo);
    // 로컬 저장소 값 가져오기
    const localCart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(localCart);
    // 로컬스토리지에 상품 정보가 없다면 item 추가 후 저장
    if (!localCart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      // 로컬스토리지에 상품 정보가 있다면 중복 확인
      const found = parsedCart.findIndex((a) => a.id === item.id);
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

  return (
    <DetailModalContainer show={detailModal && true}>
      <DetailOverview>
        <DetailImgContainer>
          <img
            className="img detail-image"
            src={item.image_path}
            alt="상품 상세 이미지입니다."
          />
        </DetailImgContainer>
        <DetailDescription>
          <p>{item.name}</p>
          <p className="detail-price">{item.price.toLocaleString()}원</p>
          <button className="detail-add-btn" onClick={handleAddToBtn}>
            장바구니에 담기
          </button>
        </DetailDescription>
      </DetailOverview>
      <h3>상품 프리뷰</h3>
      <DetailPreview>
        {detailImgArr.map((imgItem, imgIndex) => {
          return (
            <PreviewItems key={imgItem.id}>
              <img
                src={item.image_path}
                alt="상품 상세화면 미리보기 이미지 입니다."
                className="img"
              />
            </PreviewItems>
          );
        })}
      </DetailPreview>
      <DetailCloseButton
        onClick={() => {
          setDetailModal(!detailModal);
        }}
      >
        X
      </DetailCloseButton>
      {detailAddTo === true && (
        <DetailAddToModal
          detailAddTo={detailAddTo}
          setDetailAddTo={setDetailAddTo}
        />
      )}
    </DetailModalContainer>
  );
};

export default DetailModal;
