import styled from "styled-components";

export const StyledCartCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartContents = styled.div`
  display: flex;
  align-items: center;
`;

export const CartImgContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const CartDescription = styled.div`
  margin-left: var(--margin-medium);
  p {
    margin-bottom: var(--margin-micro);
  }
  p:first-child {
    font-size: var(--font-size-micro);
  }
  p:nth-child(2) {
    font-weight: var(--font-weight-bold);
  }
`;

export const CartBtnBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    width: 2rem;
    text-align: center;
  }
  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: none;
    outline: none;
    border: 2px solid var(--color-light-grey);
    cursor: pointer;
  }
`;

export const CartDelBtn = styled.button`
  font-size: var(--font-size-medium-large);
  color: var(--color-light-grey);
  padding: var(--padding-small);
`;
