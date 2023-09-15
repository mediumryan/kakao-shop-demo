import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { styled } from 'styled-components';

const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const PlusMinus = styled.button`
    font-size: var(--font-size-medium);
`;

const Quantity = styled.span`
    font-size: var(--font-size-small);
    color: blue;
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
