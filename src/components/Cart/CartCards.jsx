import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { allItem } from '../../atom';
import CartQuantity from './CartQuantity';
import { FaTrash } from 'react-icons/fa';

const CartCard = styled.div`
    width: 100%;
    background-color: var(--bg-200);
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-medium);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CartSelector = styled.input`
    width: 20px;
    height: 20px;
`;

const CartImgWrapper = styled.div`
    max-width: 180px;
    max-height: 180px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const CartName = styled.p`
    font-size: var(--font-size-small);
    max-width: 180px;
`;

const CartPrice = styled.span``;

const CartDelete = styled.button``;

export default function CartCards() {
    const i = useRecoilValue(allItem);
    const item = i[0];

    return (
        <CartCard>
            <CartSelector type="checkbox" />
            <CartImgWrapper>
                <img src={item.image_path} alt={item.name} />
            </CartImgWrapper>
            <CartName>{item.name}</CartName>
            <CartQuantity />
            <CartPrice>{item.price}won</CartPrice>
            <CartDelete>
                <FaTrash />
            </CartDelete>
        </CartCard>
    );
}
