import styled, { keyframes } from 'styled-components';

export const CartCardsContainer = styled.div`
    width: 100%;
    max-height: 600px;
    overflow: scroll;
`;

export const CartDelBtn = styled.button`
    color: var(--color-light-grey);
    cursor: pointer;
    transition: var(--animation-duration) all;
    &:hover {
        color: var(--color-4);
    }
`;

export const CartImgContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
`;

export const CartBottom = styled.div`
    margin: var(--margin-medium-large) 0;
    padding: var(--padding-small);
    width: 100%;
    font-size: var(--font-size-medium);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
