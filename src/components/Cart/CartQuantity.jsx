import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { styled } from 'styled-components';

const QuantityWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlusMinus = styled.button`
    font-size: var(--font-size-medium);
    color: var(--primary-100);
    transition: 300ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const Quantity = styled.span`
    font-size: var(--font-size-small);
    margin: 0 var(--margin-medium);
`;

export default function CartQuantity() {
    return (
        <QuantityWrapper>
            <PlusMinus>
                <FaMinusCircle />
            </PlusMinus>
            <Quantity>1</Quantity>
            <PlusMinus>
                <FaPlusCircle />
            </PlusMinus>
        </QuantityWrapper>
    );
}
