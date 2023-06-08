import { useEffect } from 'react';

const CartCards = ({item, index, cart, setCart}) => {

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])
  
  function plusCount() {
    const copy = [...cart];
    copy[index].quantity ++;
    setCart(copy);
  }

  function minusCount() {
    if(item.quantity > 1) {
      const copy = [...cart];
      copy[index].quantity --;
      setCart(copy);
    }
  }

  function deleteItem() {
    
    if(cart.length !== 1) {
      let copy = [...cart];
      copy.splice(index,1);
      setCart(copy);
    } else {
      let copy = [...cart];
      copy = [];
      setCart(copy);
      localStorage.setItem('cart', JSON.stringify([]));
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
  
  return(
    <div id='cart-cards'>
      <div className='cart-cards-left'>
        <input 
          type='checkbox'
          onClick={handleItemCheckBox}
          onChange={(e)=>{
            console.log();
          }}
          checked={cart[index].checked}
          />
        <div className='cart-cards-images-container'>
          <img 
          className='img'
          alt='상품 이미지 입니다.'
          src={item.image_path}
        />
        </div>
        <div className='cart-cards-description'>
          <p className='cart-cards-name'>{item.name}</p>
          <p className='cart-cards-price'>
            {(item.price * item.quantity).toLocaleString()}원
          </p>
          <div className='cart-cards-btn-box'>
            <button 
              className='cart-minus-btn'
              onClick={minusCount}
              >-</button>
            <p className='cart-quantity'>{item.quantity}</p>
            <button 
              className='cart-plus-btn'
              onClick={plusCount}
              >+</button>
          </div>
        </div>
      </div>
      <button 
        className='cart-cards-right'
        onClick={deleteItem}
        >X</button>
    </div>
  )
}

export default CartCards;