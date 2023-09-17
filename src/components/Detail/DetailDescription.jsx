import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';

const DetailDescriptionWrapper = styled.div`
    flex-basis: 50%;
    background-color: var(--bg-200);
    margin: var(--margin-medium);
    margin-left: calc(var(--margin-medium) / 2);
    padding: var(--padding-double-large);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
`;

const ItemCategory = styled.p`
    font-size: var(--font-size-small);
`;

const Votes = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--font-size-small);
`;

const Vote = styled.div`
    width: 10px;
    height: 20px;
    border-radius: 2px;
    background-color: var(--accent-200);
    margin-right: calc(var(--margin-micro) / 2);
`;

const ItemPrice = styled.p`
    font-size: var(--font-size-small);
`;

const ItemDescription = styled.p`
    color: var(--text-200);
    font-size: var(--font-size-medium);
    font-style: italic;
    font-weight: 600;
    margin: var(--margin-medium) 0;
    line-height: 1.5;
`;

const AddTo = styled.button`
    background-color: var(--accent-100);
    border: 2px solid var(--accent-200);
    border-radius: 4px;
    font-size: var(--font-size-small);
    font-weight: 800;
    padding: var(--padding-double-medium);
    transition: 150ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const DetailComplete = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.75);
    color: var(--bg-300);
    font-size: var(--font-size-medium-large);
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const GoToCart = styled.button`
    color: var(--primary-300);
    background-color: var(--primary-100);
    font-size: var(--font-size-medium);
    font-weight: 600;
    margin-top: var(--margin-medium-large);
    padding: var(--padding-double-medium);
    border-radius: 4px;
    transition: 150ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const DetailClose = styled.button`
    position: absolute;
    top: 2%;
    right: 2%;
    font-size: var(--font-size-small);
    color: var(--bg-300);
`;

export default function DetailDescription({ item }) {
    const navigate = useNavigate();
    const vote_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [detailCompleteState, setDetailCompleteState] = useState(false);
    const ToggleDetailComplete = () => {
        if (detailCompleteState === false) {
            setDetailCompleteState(true);
            setTimeout(() => {
                setDetailCompleteState(false);
            }, 1500);
        } else {
            setDetailCompleteState(false);
        }
    };
    // Add cart item
    const [cart, setCart] = useRecoilState(cartState);
    const AddCart = () => {
        const itemIndex = cart.findIndex((a) => a.id === item.id);
        if (itemIndex === -1) {
            setCart([...cart, item]);
        } else {
            const newCart = [...cart];
            newCart[itemIndex] = {
                ...newCart[itemIndex],
                quantity: newCart[itemIndex].quantity + 1,
            };
            setCart(newCart);
        }
        ToggleDetailComplete();
    };

    console.log(cart);

    return (
        <DetailDescriptionWrapper>
            <ItemCategory>種類：{item.category_jp}</ItemCategory>
            <Votes>
                {vote_arr.map((item) => (
                    <Vote />
                ))}
                <span>({item.vote_average})</span>
            </Votes>
            <ItemPrice>価格：{item.price.toLocaleString()}円</ItemPrice>
            <ItemDescription>{item.description}</ItemDescription>
            <br />
            <br />
            <br />
            <AddTo onClick={AddCart}>カートに追加</AddTo>
            <DetailComplete
                visible={detailCompleteState}
                onClick={ToggleDetailComplete}
            >
                <p>商品がカートに追加されました。</p>
                <GoToCart
                    onClick={() => {
                        navigate('/cart');
                    }}
                >
                    My カート確認
                </GoToCart>
                <DetailClose onClick={ToggleDetailComplete}>X</DetailClose>
            </DetailComplete>
        </DetailDescriptionWrapper>
    );
}
