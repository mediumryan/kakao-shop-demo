import { styled } from 'styled-components';
import CartAllSelector from '../components/Cart/CartAllSelector';
import CartCards from '../components/Cart/CartCards';
import {
    CartBottom,
    CartQuantityPrice,
    CartBuyBtn,
} from '../styled/styled-cart/StyledCartContainer';
import { Container, Title } from './Home';
import { useRecoilState } from 'recoil';
import { cartState } from '../atom';

const CartCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Cart = ({ pageTitle }) => {
    const [cart, setCart] = useRecoilState(cartState);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CartAllSelector />
            <CartCardWrapper>
                {cart.map((item) => {
                    return <CartCards />;
                })}
            </CartCardWrapper>
            <CartBottom>
                <CartQuantityPrice>
                    <span>全て : (0)コ</span>
                    <span>価格 : (0)円</span>
                </CartQuantityPrice>
                <CartBuyBtn>購入する</CartBuyBtn>
            </CartBottom>
        </Container>
    );
};

export default Cart;
