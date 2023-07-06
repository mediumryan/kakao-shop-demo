// styled-components 불러오기
import { useDispatch } from "react-redux";
import {
  AddToModalContainer,
  AddToModalLink,
} from "../styled/styled-modal/AddToModalContainer";
import { closeAddTo } from "../store/addToSlice";

const AddToModal = () => {
  const dispatch = useDispatch();

  function close() {
    dispatch(closeAddTo());
  }

  return (
    <AddToModalContainer onClick={close}>
      <p>상품이 장바구니에 추가되었습니다!</p>
      <p>이 화면은 2초 후 자동으로 사라집니다.</p>
      <AddToModalLink to="/cart">-- 장바구니 확인 --</AddToModalLink>
    </AddToModalContainer>
  );
};

export default AddToModal;
