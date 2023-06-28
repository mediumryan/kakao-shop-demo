import styled from "styled-components";

export const MainNavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 var(--padding-medium-large) 0 var(--padding-large);
  border-bottom: 2px solid var(--color-1);
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  margin-bottom: var(--margin-large);
  z-index: 999;
  @media screen and (max-width: 413px) {
    border-bottom: none;
    flex-direction: column;
    padding: 0;
  }
`;

export const NavTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h1 {
    color: #645cbb;
    font-size: var(--font-size-medium);
    @media screen and (max-width: 413px) {
      display: none;
    }
  }
  img {
    height: 120px;
  }
`;

export const NavMenu = styled.ul`
  display: ${(props) => (props.show ? "flex" : "none")};
  margin: 0 var(--margin-medium);
  li {
    padding: var(--padding-small) var(--padding-medium);
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    margin-right: var(--margin-micro);
    border-bottom: 1px solid transparent;
    transition: var(--animation-duration) all;
    &:hover {
      border-bottom: 1px solid var(--color-1);
    }
    @media screen and (max-width: 413px) {
      margin: 0;
      width: 100%;
      padding: 0;
      padding-bottom: var(--padding-micro);
      margin-bottom: var(--margin-medium);
      text-align: center;
    }
  }
  @media screen and (max-width: 413px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;

export const NavOthers = styled.ul`
  display: ${(props) => (props.show ? "flex" : "none")};
  margin-left: auto;
  li {
    padding: var(--padding-small) var(--padding-medium);
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    margin-right: var(--margin-micro);
    border-bottom: 1px solid transparent;
    transition: var(--animation-duration) all;
    &:hover {
      border-bottom: 1px solid var(--color-1);
    }
  }
  @media screen and (max-width: 413px) {
    margin: var(--margin-medium) auto;
  }
`;
