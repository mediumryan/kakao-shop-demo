import { styled } from 'styled-components';
import CartAllSelector from '../components/Cart/CartAllSelector';
import CartCards from '../components/Cart/CartCards';
import { Container, Title } from './Home';
import { useRecoilValue } from 'recoil';
import { cartState } from '../atom';
import CartBuy from '../components/Cart/CartBuy';

const CartCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Cart = ({ pageTitle }) => {
    const cart = useRecoilValue(cartState);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CartAllSelector />
            <CartCardWrapper>
                {cart.map((item) => {
                    return <CartCards key={item.id} item={item} />;
                })}
            </CartCardWrapper>
            <CartBuy />
        </Container>
    );
};

export default Cart;
