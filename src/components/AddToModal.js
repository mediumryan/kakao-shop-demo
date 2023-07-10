// styled-components 불러오기
import {
  AddToModalContainer,
  AddToModalLink,
} from "../styled/styled-modal/AddToModalContainer";

const AddToModal = ({ addTo, setAddTo }) => {
  function close() {
    setAddTo(false);
  }

  return (
    <AddToModalContainer onClick={close}>
      <p>商品がカートに追加されますた!</p>
      <p>この画面は２秒後自動的に消えます。</p>
      <AddToModalLink to="/cart"> 🛒へ行く </AddToModalLink>
    </AddToModalContainer>
  );
};

export default AddToModal;
