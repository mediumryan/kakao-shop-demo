// import components
import { Container, Title } from './Home';
import CartBuy from '../components/Cart/CartBuy';
import CartAllSelector from '../components/Cart/CartAll';
import CartItemList from '../components/Cart/CartItemList';

const Cart = ({ pageTitle }) => {
    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CartAllSelector />
            <CartItemList />
            <CartBuy />
        </Container>
    );
};

export default Cart;
