import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  padding: calc(var(--padding-large) * 2);
  padding-top: var(--padding-medium-large);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  font-size: var(--font-size-medium-large);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--margin-medium-large);
  letter-spacing: 4px;
  font-style: italic;
  @media screen and (max-width: 413px) {
    margin-top: calc(var(--margin-large) * 2);
  }
`;
