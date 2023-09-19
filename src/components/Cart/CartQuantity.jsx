import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';

const QuantityWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlusMinus = styled.button`
    font-size: var(--font-size-medium);
    color: var(--primary-100);
    transition: 300ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const Quantity = styled.span`
    font-size: var(--font-size-small);
    font-weight: 800;
    margin: 0 var(--margin-medium);
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
        <QuantityWrapper>
            <PlusMinus onClick={minusCnt}>
                <FaMinusCircle />
            </PlusMinus>
            <Quantity>{item.quantity}</Quantity>
            <PlusMinus onClick={plusCnt}>
                <FaPlusCircle />
            </PlusMinus>
        </QuantityWrapper>
    );
}
