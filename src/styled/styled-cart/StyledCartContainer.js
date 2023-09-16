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

export const CartQuantityPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-1);
    color: var(--color-5);
    border-radius: 10px;
    padding: var(--padding-micro) var(--padding-small);
    span:first-child {
        padding-right: var(--padding-medium);
        border-right: 2px solid var(--color-5);
        @media screen and (max-width: 413px) {
            padding: 0;
            border-right: none;
            margin-bottom: var(--margin-small);
        }
    }
    span:nth-child(2) {
        padding-left: var(--padding-medium);
        @media screen and (max-width: 413px) {
            padding: 0;
        }
    }
    @media screen and (max-width: 413px) {
        flex-direction: column;
    }
`;

const bigSmall = keyframes`
  0%{
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
`;

export const CartBuyBtn = styled.button`
    background: var(--color-1);
    color: var(--color-5);
    font-size: var(--font-size-medium);
    border-radius: 10px;
    padding: var(--padding-micro) var(--padding-small);
    cursor: pointer;
    &:hover {
        color: var(--color-1);
        background-color: var(--color-5);
        animation: ${bigSmall} 850ms linear infinite;
    }
`;
