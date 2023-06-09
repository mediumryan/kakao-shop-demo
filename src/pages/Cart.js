import { useEffect, useState } from "react";
// 컴포넌트 불러오기
import CartCards from "./../components/CartCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import {
  CartCardsContainer,
  CartSelectDelAll,
  CartSelectAll,
  CartDelBtn,
  CartBottom,
  CartQuantityPrice,
  CartBuyBtn,
} from "../styled/styled-cart/StyledCartContainer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [checkAll, setCheckAll] = useState();

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      const parsedCart = JSON.parse(localCart);
      setCart([...cart, ...parsedCart]);
    }
  }, []);

  const checkedCart = cart.filter((a) => a.checked === true);
  const unCheckedCart = cart.filter((a) => a.checked === false);

  function onChangeCheckAll(e) {
    setCheckAll(e.target.checked);
  }

  function handleCheckAll() {
    const copy = [...cart];
    if (checkAll === true) {
      const checkAllTrue = copy.map((e) => {
        e.checked = false;
        return e;
      });
      setCart(checkAllTrue);
    } else {
      const checkAllFalse = copy.map((e) => {
        e.checked = true;
        return e;
      });
      setCart(checkAllFalse);
    }
  }

  function handleSelectDelBtn() {
    setCart(unCheckedCart);
    localStorage.setItem("cart", JSON.stringify(unCheckedCart));
  }

  // 체크 된 상품의 총 가격, 개수 구하기
  const totalQuantity = checkedCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = checkedCart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <SectionContainer>
      <SectionTitle>장바구니</SectionTitle>
      <CartSelectDelAll>
        <CartSelectAll>
          <input
            type="checkbox"
            onChange={onChangeCheckAll}
            onClick={handleCheckAll}
          />
          <span>전체 {checkedCart.length}</span>
        </CartSelectAll>
        <CartDelBtn onClick={handleSelectDelBtn}>선택삭제</CartDelBtn>
      </CartSelectDelAll>
      <CartCardsContainer>
        {cart.map((item, index) => {
          return (
            <CartCards
              item={item}
              index={index}
              cart={cart}
              setCart={setCart}
              key={item.id}
            />
          );
        })}
      </CartCardsContainer>
      <CartBottom>
        <CartQuantityPrice>
          <span>상품 수 : {totalQuantity}개</span>
          <span>가격 : {totalPrice.toLocaleString()}원</span>
        </CartQuantityPrice>
        <CartBuyBtn>결제하기</CartBuyBtn>
      </CartBottom>
    </SectionContainer>
  );
};

export default Cart;
