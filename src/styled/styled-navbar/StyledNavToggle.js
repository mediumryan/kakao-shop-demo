import styled from "styled-components";

export const NavToggleBtn = styled.button`
  display: none;
  position: absolute;
  right: 24px;
  top: 42px;
  border: none;
  background: none;
  outline: none;
  font-size: 24px;
  @media screen and (max-width: 413px) {
    display: block;
  }
`;
