import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartState } from '../../atom';
import DetailComplete from './DetailComplete';

const DetailDescriptionWrapper = styled.div`
    position: relative;
    flex-basis: 50%;
    margin: var(--margin-medium);
    padding: 1rem 2rem;
    border: 2px solid var(--white-200);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: var(--margin-medium) 0 0 0;
    }
`;

const DetailSubTitle = styled.p`
    width: 90px;
`;

const DetailItem = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
`;

const ItemDescription = styled.p`
    color: var(--black-200);
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const Votes = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
`;

const Vote = styled.div`
    width: 10px;
    height: 20px;
    border-radius: 2px;
    margin-right: 2px;
    background-color: ${(props) =>
        props.vote_average >= props.index + 1
            ? 'var(--accent-100)'
            : 'var(--accent-300)'};
`;

const VoteCount = styled.span`
    font-size: 1.25rem;
    color: var(--black-200);
    margin-left: 0.5rem;
`;

const AddTo = styled.button`
    background-color: var(--white-200);
    color: var(--black-200);
    width: 50%;
    border-radius: 10px;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.25rem 0;
    margin: 0 auto;
    transition: 150ms all;
    &:hover {
        transform: scale(1.05);
        color: var(--accent-100);
        background-color: var(--accent-300);
    }
`;

export default function DetailDescription({ item }) {
    const vote_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [detailCompleteState, setDetailCompleteState] = useState(false);
    const ToggleDetailComplete = () => {
        if (!detailCompleteState) {
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
            <DetailItem>
                <DetailSubTitle>カテゴリ</DetailSubTitle>: {item.category_jp}
            </DetailItem>
            <DetailItem>
                <DetailSubTitle>価格</DetailSubTitle>:
                {item.price.toLocaleString()}円
            </DetailItem>
            <ItemDescription>{item.description}</ItemDescription>
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
            <AddTo onClick={AddCart}>カートに追加</AddTo>
            <DetailComplete
                detailCompleteState={detailCompleteState}
                ToggleDetailComplete={ToggleDetailComplete}
            />
        </DetailDescriptionWrapper>
    );
}
