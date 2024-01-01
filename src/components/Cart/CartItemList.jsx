import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { cartState } from '../../atom';
// import components
import CartItem from './CartItem/CartItem';

const CartItemListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export default function CartItemList() {
    const cart = useRecoilValue(cartState);

    return (
        <CartItemListWrapper>
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })}
        </CartItemListWrapper>
    );
}
