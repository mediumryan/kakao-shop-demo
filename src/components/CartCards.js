import { useEffect } from 'react';
// styled-components 불러오기
import {
    StyledCartCards,
    CartContents,
    CartImgContainer,
    CartDescription,
    CartBtnBox,
} from '../styled/styled-cart/StyledCartCards';

const CartCards = () => {
    return (
        <StyledCartCards>
            <CartContents>
                <input type="checkbox" onChange={(e) => {}} />
                <CartImgContainer>
                    <img className="img" alt="商品のイメージです。" />
                </CartImgContainer>
                <CartDescription>
                    <p>0</p>
                    <p>0円</p>
                    <CartBtnBox>
                        <button>-</button>
                        <p></p>
                        <button>+</button>
                    </CartBtnBox>
                </CartDescription>
            </CartContents>
            <button className="cart-cards-right">X</button>
        </StyledCartCards>
    );
};

export default CartCards;
