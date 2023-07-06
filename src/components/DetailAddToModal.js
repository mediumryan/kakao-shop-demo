import { useEffect } from "react";
// styled-components 불러오기
import {
  DetailAddToModalContainer,
  DetailAddToModalLink,
} from "../styled/styled-detail/StyledDetailAddTo.js/StyledDetailAddToModal";

const DetailAddToModal = ({ detailAddTo, setDetailAddTo }) => {
  function closeDetailAddTo() {
    setDetailAddTo(!detailAddTo);
  }

  useEffect(() => {
    const a = setTimeout(() => {
      setDetailAddTo(!detailAddTo);
    }, 2000);
    return () => clearTimeout(a);
  }, [detailAddTo]);

  return (
    <DetailAddToModalContainer onClick={closeDetailAddTo}>
      <p>상품이 장바구니에 추가되었습니다!</p>
      <p>이 화면은 2초 후 자동으로 사라집니다.</p>
      <DetailAddToModalLink to="./../cart">
        -- 장바구니 확인 --
      </DetailAddToModalLink>
    </DetailAddToModalContainer>
  );
};

export default DetailAddToModal;
