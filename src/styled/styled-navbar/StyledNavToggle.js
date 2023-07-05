import styled from "styled-components";
import { FaSortDown } from "react-icons/fa";

export const NavToggleBtn = styled(FaSortDown)`
  display: none;
  position: absolute;
  right: 24px;
  top: 24px;
  border: none;
  background: none;
  outline: none;
  font-size: 24px;
  transform: ${(props) =>
    props.rotated ? "rotate(360deg)" : "rotate(180deg)"};
  transition: 300ms all linear;
  @media screen and (max-width: 413px) {
    display: block;
  }
`;
