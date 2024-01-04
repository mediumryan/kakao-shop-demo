import { styled } from 'styled-components';
import CartQuantity from './CartQuantity';
import { FaTrash } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { cartState } from '../../../atom';
import ItemChecker from './ItemChecker';

const CartItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 1rem;
    margin: 0.25rem 0;
    border-radius: 10px;
    background-color: var(--accent-400);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 25px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
`;

const CartName = styled.h4`
    width: 75%;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 2px;
    text-align: center;
    margin: 5rem 0 2rem 0;
    color: var(--accent-100);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        line-height: 1.2;
        font-size: 1rem;
        margin-top: 2.5rem;
    }
`;

export const CartItemContents = styled.div`
    text-align: center;
    img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 75px;
            height: 75px;
            margin-left: 1rem;
        }
    }
`;

const CartPrice = styled.span`
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 1.5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const CartDelete = styled.button`
    color: var(--black-200);
    font-size: 1.5rem;
    transition: 300ms all;
    &:hover {
        transform: scale(1.15);
        color: var(--accent-100);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
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
        <>
            <CartName>{item.name}</CartName>
            <CartItemWrapper>
                {/* checker */}
                <ItemChecker item={item} itemIndex={itemIndex} />
                {/* image */}
                <CartItemContents style={{ flexBasis: '30%' }}>
                    <img src={item.image_path} alt={item.name} />
                </CartItemContents>
                {/* quantity */}
                <CartQuantity item={item} itemIndex={itemIndex} />
                {/* price */}
                <CartItemContents style={{ flexBasis: '30%' }}>
                    <CartPrice>
                        ￥{(item.price * item.quantity).toLocaleString()}
                    </CartPrice>
                </CartItemContents>
                {/* delete button */}
                <CartItemContents style={{ flexBasis: '15%' }}>
                    <CartDelete onClick={deleteItem}>
                        <FaTrash />
                    </CartDelete>
                </CartItemContents>
            </CartItemWrapper>
        </>
    );
}
