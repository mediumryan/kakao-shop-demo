import { useEffect } from "react";
// styled-components 불러오기
import {
  StyledCartCards,
  CartContents,
  CartImgContainer,
  CartDescription,
  CartBtnBox,
} from "../styled/styled-cart/StyledCartCards";

const CartCards = ({ item, index, cart, setCart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function plusCount() {
    const copy = [...cart];
    copy[index].quantity++;
    setCart(copy);
  }

  function minusCount() {
    if (item.quantity > 1) {
      const copy = [...cart];
      copy[index].quantity--;
      setCart(copy);
    }
  }

  function deleteItem() {
    if (cart.length !== 1) {
      let copy = [...cart];
      copy.splice(index, 1);
      setCart(copy);
    } else {
      let copy = [...cart];
      copy = [];
      setCart(copy);
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  function handleItemCheckBox() {
    let copy = [...cart];
    copy[index].checked = !copy[index].checked;
    setCart(copy);
  }

  function onChangeCheckBox(e) {
    const checkedStatus = e.target.checked;
  }

  return (
    <StyledCartCards>
      <CartContents>
        <input
          type="checkbox"
          onClick={handleItemCheckBox}
          onChange={(e) => {}}
          checked={cart[index].checked}
        />
        <CartImgContainer>
          <img
            className="img"
            alt="商品のイメージです。"
            src={item.image_path}
          />
        </CartImgContainer>
        <CartDescription>
          <p>{item.name}</p>
          <p>{(item.price * item.quantity).toLocaleString()}円</p>
          <CartBtnBox>
            <button onClick={minusCount}>-</button>
            <p>{item.quantity}</p>
            <button onClick={plusCount}>+</button>
          </CartBtnBox>
        </CartDescription>
      </CartContents>
      <button className="cart-cards-right" onClick={deleteItem}>
        X
      </button>
    </StyledCartCards>
  );
};

export default CartCards;
