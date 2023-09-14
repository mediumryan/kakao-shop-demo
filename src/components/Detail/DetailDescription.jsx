import { styled } from 'styled-components';

const DetailDescriptionWrapper = styled.div`
    flex-basis: 50%;
    background-color: var(--bg-200);
    margin: var(--margin-medium);
    margin-left: calc(var(--margin-medium) / 2);
    padding: var(--padding-double-large);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const ItemCategory = styled.p`
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-medium);
`;

const Votes = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-medium);
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
    margin-bottom: var(--margin-medium);
`;

const ItemDescription = styled.p`
    font-size: var(--font-size-medium);
    margin: var(--margin-medium) 0;
    line-height: 1.5;
`;

const AddTo = styled.button``;

export default function DetailDescription({ item }) {
    const vote_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            <AddTo>カートに追加</AddTo>
        </DetailDescriptionWrapper>
    );
}
