import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';
import DetailComplete from './DetailComplete';

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
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: var(--margin-medium) 0 0 0;
    }
`;

const ItemCategory = styled.p`
    font-size: var(--font-size-medium);
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
    margin-right: calc(var(--margin-micro) / 2);
    background-color: ${(props) =>
        props.vote_average >= props.index + 1
            ? 'var(--accent-200)'
            : 'var(--bg-300)'};
`;

const VoteCount = styled.span`
    font-size: var(--font-size-small);
    margin-left: var(--margin-medium);
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

export default function DetailDescription({ item }) {
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

    return (
        <DetailDescriptionWrapper>
            <ItemCategory>種類：{item.category_jp}</ItemCategory>
            <Votes>
                {vote_arr.map((_, index) => (
                    <Vote
                        key={index}
                        vote_average={item.vote_average}
                        index={index}
                    />
                ))}
                <VoteCount>({item.vote_average})</VoteCount>
            </Votes>
            <ItemPrice>価格：{item.price.toLocaleString()}円</ItemPrice>
            <ItemDescription>{item.description}</ItemDescription>
            <br />
            <br />
            <br />
            <AddTo onClick={AddCart}>カートに追加</AddTo>
            <DetailComplete
                detailCompleteState={detailCompleteState}
                ToggleDetailComplete={ToggleDetailComplete}
            />
        </DetailDescriptionWrapper>
    );
}
