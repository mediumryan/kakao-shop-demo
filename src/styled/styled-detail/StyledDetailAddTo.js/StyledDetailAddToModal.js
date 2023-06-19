import styled from "styled-components";
import { AddToModalLink } from "../../styled-modal/AddToModalContainer";

export const DetailAddToModalContainer = styled.div`
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
  border-radius: 12px;
  opacity: 0.9;
  * {
    margin-bottom: var(--margin-medium);
  }
`;

export const DetailAddToModalLink = styled(AddToModalLink)``;
