import { styled } from 'styled-components';

const CardsDescription = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    font-size: var(--font-size-micro);
    background: var(--bg-200);
    padding: var(--padding-medium-large);
    border-top: 2px solid var(--bg-100);
    border-radius: 0 0 10px 10px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    span {
        margin-bottom: var(--margin-medium);
    }
`;

const CartName = styled.span`
    line-height: 1.5;
    flex-basis: 60%;
    margin-right: var(--margin-medium);
    text-align: left;
`;

const CartPrice = styled.span`
    color: var(--primary-100);
    flex-basis: 40%;
    text-align: center;
`;

export default function CardDescriptions({ item }) {
    return (
        <CardsDescription>
            <CartName>{item.name}</CartName>
            <CartPrice>{item.price.toLocaleString()}円</CartPrice>
        </CardsDescription>
    );
}
