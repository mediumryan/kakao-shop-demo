import { styled } from 'styled-components';

const HeaderWrapper = styled.tr`
    width: 75%;
    background-color: var(--bg-200);
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-medium);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
        text-align: center;
        background-color: green;
        margin: 4px;
        &:first-child {
            flex-basis: 7.5;
        }
        &:nth-child(2) {
            flex-basis: 25%;
        }
        &:nth-child(3) {
            flex-basis: 15%;
        }
        &:nth-child(4) {
            flex-basis: 25%;
        }
        &:nth-child(5) {
            flex-basis: 15%;
        }
        &:nth-child(6) {
            flex-basis: 7.5%;
        }
    }
`;

export default function CartContentHeader() {
    return (
        <HeaderWrapper>
            <p>check</p>
            <p>image</p>
            <p>name</p>
            <p>quantity</p>
            <p>price</p>
            <p>delete</p>
        </HeaderWrapper>
    );
}
