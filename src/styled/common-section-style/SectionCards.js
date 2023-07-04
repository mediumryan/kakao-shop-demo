import styled from "styled-components";

export const SectionCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(460px, auto);
  grid-gap: 24px;

  @media screen and (max-width: 413px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: repeat(180px, auto);
  }
`;

export const SectionCards = styled.div`
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: relative;
  margin: var(--margin-small);
  margin-bottom: var(--margin-medium-large);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const CardsImgContainer = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  @media screen and (max-width: 413px) {
    width: 160px;
    height: 220px;
  }
`;

export const CardsDescription = styled.div`
  height: 120px;
  padding: var(--padding-small);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  span:nth-child(2) {
    color: var(--color-1);
  }
  span:nth-child(3) {
    background-color: var(--color-yellow);
    width: 100%;
    padding: var(--padding-small);
    text-align: center;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
    transition: 300ms all;
    z-index: 999;
    &:hover {
      opacity: 0.75;
      color: var(--color-1);
    }
  }
`;

export const CardIndex = styled.span`
  position: absolute;
  top: 18px;
  left: 18px;
  cursor: default;
`;
