import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';
import { useState } from 'react';

const SelectAllWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-large);
`;

export const CartSelectAll = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 20px;
        height: 20px;
    }
    span {
        cursor: default;
    }
`;

export const CartSelectDelAll = styled.button`
    font-size: var(--font-size-small);
    background-color: var(--bg-100);
    padding: var(--padding-double-micro);
    border-radius: 10px;
    transition: 300ms all;
    &:hover {
        opacity: 0.75;
    }
`;

export default function CartAllSelector() {
    const [cart, setCart] = useRecoilState(cartState);
    const [toggleCheck, setToggleCheck] = useState(false);
    const toggleAll = () => {
        setToggleCheck((prev) => !prev);
        const newCart = cart.map((item) => ({
            ...item,
            checked: !toggleCheck,
        }));
        setCart(newCart);
    };

    const deleteChecked = () => {
        const newCart = cart.filter((i) => i.checked === false);
        setCart(newCart);
    };

    return (
        <SelectAllWrapper>
            <CartSelectAll>
                <input
                    type="checkbox"
                    value={toggleCheck}
                    onChange={toggleAll}
                />
                <span> 全て選択</span>
            </CartSelectAll>
            <CartSelectDelAll onClick={deleteChecked}>
                選択した項目削除
            </CartSelectDelAll>
        </SelectAllWrapper>
    );
}
