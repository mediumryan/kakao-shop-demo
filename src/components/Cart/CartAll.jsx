import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';
import { useState } from 'react';

const CartAllWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1rem 0 3rem 0;
    color: var(--black-200);
`;

export const CartSelectAll = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 15px;
            height: 15px;
        }
    }
    span {
        cursor: default;
    }
`;

export const DeleteSelected = styled.button`
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: var(--white-200);
    color: var(--black-200);
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    transition: 300ms all;
    &:hover {
        color: var(--accent-100);
        background-color: var(--accent-300);
    }
`;

export default function CartAll() {
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
        <CartAllWrapper>
            <CartSelectAll>
                <input
                    type="checkbox"
                    value={toggleCheck}
                    onChange={toggleAll}
                />
                <span> 全て選択</span>
            </CartSelectAll>
            <DeleteSelected onClick={deleteChecked}>
                選択した項目削除
            </DeleteSelected>
        </CartAllWrapper>
    );
}
