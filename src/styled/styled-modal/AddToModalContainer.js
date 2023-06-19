import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddToModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-2);
  border-radius: 10px;
  opacity: 0.95;
  p {
    margin-bottom: var(--margin-small);
    padding: 0 var(--padding-medium);
    color: var(--color-4);
  }
`;

export const AddToModalLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-size-small);
  background-color: var(--color-4);
  margin-top: var(--margin-medium);
  padding: var(--padding-small) var(--padding-medium);
  border-radius: 10px;
  transition: var(--animation-duration) all;
  &:hover {
    transform: scale(1.05);
  }
`;
