import { styled } from 'styled-components';
import CartQuantity from './CartQuantity';
import { FaTrash } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { cartState } from '../../atom';

const CartCard = styled.div`
    width: 75%;
    background-color: var(--bg-200);
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-medium);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const CartContentsWrapper = styled.div`
    text-align: center;
    &:first-child {
        flex-basis: 7.5;
    }
    &:nth-child(3) {
        flex-basis: 15%;
    }
    &:nth-child(4) {
        flex-basis: 25%;
    }
    &:nth-child(5) {
        flex-basis: 15%;
    }
    &:nth-child(6) {
        flex-basis: 7.5%;
    }
`;

const CartSelector = styled.input`
    width: 20px;
    height: 20px;
`;

const CartImgWrapper = styled.div`
    width: 100%;
    text-align: center;
    flex-basis: 25%;
    img {
        width: 50%;
        height: 50%;
        border-radius: 10px;
    }
`;

const CartName = styled.p`
    font-size: var(--font-size-micro);
    font-weight: 600;
    line-height: 1.5;
    text-align: left;
`;

const CartPrice = styled.span`
    letter-spacing: 2px;
    font-weight: 800;
`;

const CartDelete = styled.button`
    color: var(--primary-100);
    font-size: var(--font-size-small);
    transition: 300ms all;
    &:hover {
        transform: scale(1.15);
        opacity: 0.75;
    }
`;

export default function CartCards({ item }) {
    const [cart, setCart] = useRecoilState(cartState);
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    const deleteItem = () => {
        const newCart = [...cart];
        newCart.splice(itemIndex, 1);
        setCart(newCart);
    };

    // checkbox
    const toggleChecked = () => {
        const newCart = [...cart];
        newCart[itemIndex] = {
            ...newCart[itemIndex],
            checked: !newCart[itemIndex].checked,
        };
        setCart(newCart);
    };

    return (
        <CartCard>
            <CartContentsWrapper>
                <CartSelector
                    type="checkbox"
                    checked={item.checked}
                    onChange={toggleChecked}
                />
            </CartContentsWrapper>
            <CartImgWrapper>
                <img src={item.image_path} alt={item.name} />
            </CartImgWrapper>
            <CartContentsWrapper>
                <CartName>{item.name}</CartName>
            </CartContentsWrapper>
            <CartContentsWrapper>
                <CartQuantity item={item} itemIndex={itemIndex} />
            </CartContentsWrapper>
            <CartContentsWrapper>
                <CartPrice>
                    ￥{(item.price * item.quantity).toLocaleString()}
                </CartPrice>
            </CartContentsWrapper>
            <CartContentsWrapper>
                <CartDelete onClick={deleteItem}>
                    <FaTrash />
                </CartDelete>
            </CartContentsWrapper>
        </CartCard>
    );
}
