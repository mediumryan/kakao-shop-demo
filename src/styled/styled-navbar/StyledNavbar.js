import styled from "styled-components";

export const MainNavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 3.5rem 0 7rem;
  border-bottom: 2px solid var(--color-1);
  position: relative;
  @media screen and (max-width: 413px) {
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
    font-size: 28px;
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
  margin: 0 2rem;
  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    margin-right: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: var(--animation-duration) all;
    &:hover {
      border-bottom: 1px solid var(--color-1);
    }
    @media screen and (max-width: 413px) {
      margin: 0;
      width: 100%;
      padding: 0;
      padding-bottom: 12px;
      margin-bottom: 12px;
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
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    margin-right: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: var(--animation-duration) all;
    &:hover {
      border-bottom: 1px solid var(--color-1);
    }
  }
  @media screen and (max-width: 413px) {
    margin: 12px auto;
  }
`;
