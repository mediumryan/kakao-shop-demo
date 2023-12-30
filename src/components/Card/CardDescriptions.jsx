import { styled } from 'styled-components';

const CardsDescription = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    background: var(--white-200);
    padding: 1rem 1.5rem;
    span {
        margin-bottom: var(--margin-medium);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 100px;
    }
`;

const CartName = styled.span`
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
`;

export default function CardDescriptions({ item }) {
    return (
        <CardsDescription>
            <CartName>{item.name}</CartName>
        </CardsDescription>
    );
}
