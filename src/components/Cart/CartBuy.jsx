import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { checked, checkedPrice, checkedQuantity } from '../../atom';

const CartBuyWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--margin-medium-large);
`;

export const CartQuantityPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-200);
    color: var(--text-200);
    border-radius: 10px;
    padding: var(--padding-double-medium);
    font-size: var(--font-size-medium);
    * {
        margin: var(--margin-medium) 0;
    }
`;

export const CartBuyBtn = styled.button`
    background: var(--color-1);
    color: var(--color-5);
    font-size: var(--font-size-medium);
    border-radius: 10px;
    padding: var(--padding-micro) var(--padding-small);
    cursor: pointer;
    &:hover {
        color: var(--color-1);
        background-color: var(--color-5);
    }
`;

export default function CartBuy() {
    const checkedCart = useRecoilValue(checked);
    const quantity = useRecoilValue(checkedQuantity);
    const price = useRecoilValue(checkedPrice);

    return (
        <CartBuyWrapper>
            {checkedCart.length > 0 && (
                <>
                    <CartQuantityPrice>
                        <span>全て : ({quantity})コ</span>
                        <span>価格 : ({price})円</span>
                    </CartQuantityPrice>
                    <CartBuyBtn>購入する</CartBuyBtn>
                </>
            )}
        </CartBuyWrapper>
    );
}
