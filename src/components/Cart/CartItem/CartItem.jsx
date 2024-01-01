import { styled } from 'styled-components';
import CartQuantity from '../CartQuantity';
import { FaTrash } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { cartState } from '../../../atom';
import ItemChecker from './ItemChecker';

const CartItemWrapper = styled.div`
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-medium);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
    }
`;

export const CartItemContents = styled.div`
    text-align: center;
`;

const CartName = styled.p`
    font-size: var(--font-size-micro);
    font-weight: 600;
    line-height: 1.5;
    text-align: left;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        line-height: 1.2;
        margin: 0 var(--margin-micro);
    }
`;

const CartPrice = styled.span`
    letter-spacing: 2px;
    font-weight: 800;
    font-size: var(--font-size-medium);
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

export default function CartItem({ item }) {
    const [cart, setCart] = useRecoilState(cartState);
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    const deleteItem = () => {
        const newCart = [...cart];
        newCart.splice(itemIndex, 1);
        setCart(newCart);
    };

    return (
        <CartItemWrapper>
            {/* checker */}
            <ItemChecker item={item} itemIndex={itemIndex} />
            {/* image */}
            <CartItemContents>
                <img src={item.image_path} alt={item.name} />
            </CartItemContents>
            {/* name */}
            <CartItemContents>
                <CartName>{item.name}</CartName>
            </CartItemContents>
            {/* quantity */}
            <CartItemContents>
                <CartQuantity item={item} itemIndex={itemIndex} />
            </CartItemContents>
            {/* price */}
            <CartItemContents>
                <CartPrice>
                    ￥{(item.price * item.quantity).toLocaleString()}
                </CartPrice>
            </CartItemContents>
            {/* delete button */}
            <CartItemContents>
                <CartDelete onClick={deleteItem}>
                    <FaTrash />
                </CartDelete>
            </CartItemContents>
        </CartItemWrapper>
    );
}
