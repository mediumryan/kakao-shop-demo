import styled from "styled-components";

export const DetailModalContainer = styled.div`
  background-color: #fff;
  width: 30%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.225), 0 10px 10px rgba(0, 0, 0, 0.222);
  border-radius: 10px;
  padding: var(--padding-medium-large);
  padding-bottom: var(--padding-medium-large);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  z-index: 999;
  h3 {
    width: 100%;
    margin: var(--margin-small) auto;
    color: var(--color-1);
    text-align: center;
  }
  @media screen and (max-width: 413px) {
    width: 85%;
    height: 75%;
  }
`;

export const DetailOverview = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 60%;
`;

export const DetailPreview = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DetailImgContainer = styled.div`
  position: relative;
  width: 50%;
  border: 1px solid var(--color-4);
  border-radius: 12px 0 0 12px;
  img {
    border-radius: 12px 0 0 12px;
  }
`;

export const DetailDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-4);
  border-radius: 0 12px 12px 0;
  padding: 0 var(--padding-medium);
  p:first-child {
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-medium);
  }
  p:nth-child(2) {
    color: var(--color-1);
  }
  button {
    background-color: var(--color-2);
    color: var(--color-4);
    padding: var(--padding-micro) var(--padding-small);
    font-size: var(--font-size-small);
    border-radius: 8px;
    margin-top: 1.25rem;
    cursor: pointer;
    transition: 300ms all;
    &:hover {
      background-color: var(--color-1);
    }
  }
`;

export const PreviewItems = styled.div`
  padding: 0 0.5rem;
  position: relative;
  width: 80px;
  height: 120px;
  text-align: center;
  border: 2px solid var(--color-4);
  border-radius: 4px;
  cursor: pointer;
  img {
    border-radius: 10px;
    opacity: 0.33;
    transition: var(--animation-duration) all;
    &:hover {
      opacity: 1;
    }
  }
`;

export const DetailCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 8px;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  transition: 600ms all;
  &:hover {
    transform: scale(1.05) rotate(360deg);
  }
`;
