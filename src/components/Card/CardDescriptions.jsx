import { styled } from 'styled-components';

const CardsDescription = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    background: var(--bg-200);
    padding: var(--padding-medium-large);
    border-top: 2px solid var(--bg-100);
    border-radius: 0 0 10px 10px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    span {
        margin-bottom: var(--margin-medium);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 100px;
    }
`;

const CartName = styled.span`
    line-height: 1.5;
    flex-basis: 60%;
    margin-right: var(--margin-medium);
    font-size: var(--font-size-micro);
    font-weight: 600;
    text-align: left;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 75%;
        flex-basis: 75%;
        margin: 0;
    }
`;

const CartPrice = styled.span`
    color: var(--primary-100);
    flex-basis: 40%;
    text-align: center;
    font-size: var(--font-size-small);
    font-weight: 800;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-basis: 25%;
    }
`;

export default function CardDescriptions({ item }) {
    return (
        <CardsDescription>
            <CartName>{item.name}</CartName>
            <CartPrice>{item.price.toLocaleString()}円</CartPrice>
        </CardsDescription>
    );
}
