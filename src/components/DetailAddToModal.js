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
      <p>商品がカートに追加されました！</p>
      <p>この画面は２秒後自動的に消えます。</p>
      <DetailAddToModalLink to="./../cart">🛒へ行く</DetailAddToModalLink>
    </DetailAddToModalContainer>
  );
};

export default DetailAddToModal;
