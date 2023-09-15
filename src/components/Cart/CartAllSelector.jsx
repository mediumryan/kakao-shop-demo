import { styled } from 'styled-components';

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
`;

export default function CartAllSelector() {
    return (
        <SelectAllWrapper>
            <CartSelectAll>
                <input type="checkbox" />
                <span> 全て選択</span>
            </CartSelectAll>
            <CartSelectDelAll>選択した項目削除</CartSelectDelAll>
        </SelectAllWrapper>
    );
}
