import {
    CartCardsContainer,
    CartSelectDelAll,
    CartSelectAll,
    CartDelBtn,
    CartBottom,
    CartQuantityPrice,
    CartBuyBtn,
} from '../styled/styled-cart/StyledCartContainer';
import { Container, Title } from './Home';

const Cart = () => {
    return (
        <Container>
            <Title>カート</Title>
            <CartSelectDelAll>
                <CartSelectAll>
                    <input type="checkbox" />
                    <span>全て選択する (0)</span>
                </CartSelectAll>
                <CartDelBtn>選択した項目削除</CartDelBtn>
            </CartSelectDelAll>
            <CartCardsContainer>ㅗㅑ</CartCardsContainer>
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
