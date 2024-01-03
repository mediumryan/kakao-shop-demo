import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import icons
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
// import state data
import { cartState } from '../../../atom';

const CartQuantityWrapper = styled.div`
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
`;

const PlusBtn = styled(FaPlusCircle)`
    font-size: 1.5rem;
    color: var(--accent-100);
    transition: 300ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;
const MinusBtn = styled(FaMinusCircle)`
    font-size: 1.5rem;
    color: var(--accent-100);
    transition: 300ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const Quantity = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0.75rem;
    cursor: default;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0;
    }
`;

export default function CartQuantity({ item, itemIndex }) {
    const [cart, setCart] = useRecoilState(cartState);
    // plus and minus item
    const plusCnt = () => {
        const newCart = [...cart];
        newCart[itemIndex] = {
            ...newCart[itemIndex],
            quantity: newCart[itemIndex].quantity + 1,
        };
        setCart(newCart);
    };
    const minusCnt = () => {
        if (item.quantity < 2) {
            alert('商品数が1個以下では設定できません。');
        } else {
            const newCart = [...cart];
            newCart[itemIndex] = {
                ...newCart[itemIndex],
                quantity: newCart[itemIndex].quantity - 1,
            };
            setCart(newCart);
        }
    };
    return (
        <CartQuantityWrapper>
            <MinusBtn onClick={minusCnt} />
            <Quantity>{item.quantity}</Quantity>
            <PlusBtn onClick={plusCnt} />
        </CartQuantityWrapper>
    );
}
