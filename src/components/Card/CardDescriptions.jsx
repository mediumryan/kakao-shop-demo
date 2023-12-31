import { styled } from 'styled-components';

const CardsDescription = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    padding: 1rem 1.5rem;
    color: var(--accent-100);
    background: rgba(191, 172, 226, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    margin-bottom: var(--margin-medium);
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
