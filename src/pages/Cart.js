import { useEffect, useState } from 'react';
// 컴포넌트 불러오기
import CartCards from './../components/CartCards';

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [checkAll, setCheckAll] = useState();

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if(localCart) {
      const parsedCart = JSON.parse(localCart);
      setCart([...cart, ...parsedCart]);
    }
  },[])

  const checkedCart = cart.filter(a => a.checked === true);
  const unCheckedCart = cart.filter(a => a.checked === false);

  function onChangeCheckAll(e) {
    setCheckAll(e.target.checked);
  }

  function handleCheckAll() {
    const copy = [...cart];
    if(checkAll === true) {
      const checkAllTrue = copy.map((e) => {
        e.checked = false;
        return e;
      })
      setCart(checkAllTrue);
    } else {
      const checkAllFalse = copy.map((e) => {
        e.checked = true;
        return e;
      })
      setCart(checkAllFalse);
    }
  }

  function handleSelectDelBtn() {
    setCart(unCheckedCart);
    localStorage.setItem('cart', JSON.stringify(unCheckedCart));
  }

  // 체크 된 상품의 총 가격, 개수 구하기
  const totalQuantity = checkedCart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = checkedCart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  
  
  return(
    <div className='containers'>
      <h1 className='titles'>장바구니</h1>
      <div className='cart-selectAll'>
        <div className='selectAll-left'>
          <input 
            type='checkbox' 
            onChange={onChangeCheckAll}
            onClick={handleCheckAll}
            />
          <span>전체 {checkedCart.length}</span>
        </div>
        <button 
          className='selectAll-right'
          onClick={handleSelectDelBtn}
          >선택삭제</button>
      </div>
      <div className='cart-cards-container'>
        {
          cart.map((item,index) => {
            return(
              <CartCards 
                item={item}
                index={index}
                cart={cart} 
                setCart={setCart} 
                key={index}/>
            )
          })
        }
      </div>
      <div className='cart-bottom'>
        <div className='total-quantity'>상품 수 : {totalQuantity}개</div>
        <div className='total-price'>가격 : {(totalPrice).toLocaleString()}원</div>
        <button className='buy-btn'>결제하기</button>
      </div>
    </div>
  )
}

export default Cart;