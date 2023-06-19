import styled from "styled-components";

export const SectionCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SectionCards = styled.div`
  position: relative;
  margin: 1rem 1rem 3rem 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const CardsImgContainer = styled.div`
  width: 360px;
  height: 360px;
  position: relative;
  cursor: pointer;
`;

export const CardsDescription = styled.div`
  background-color: var(--color-4);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    margin: 0.5rem;
  }
`;

export const CardTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(2) {
    color: var(--color-1);
    font-weight: var(--font-weight-bold);
  }
`;

export const CardCartIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  transition: var(--animation-duration) transform;
  &:hover {
    transform: scale(1.25);
  }
`;

export const CardIndex = styled.span`
  position: absolute;
  top: 18px;
  left: 18px;
  cursor: default;
`;
