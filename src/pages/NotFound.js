import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NFContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: var(--font-size-small);
  }
  h1 {
    font-size: calc(var(--font-size-large) * 2);
    color: var(--color-1);
    margin-top: var(--margin-medium);
  }
`;

const NFGoHome = styled.button`
  background-color: var(--color-yellow);
  font-size: var(--font-size-medium-large);
  padding: var(--padding-medium) var(--padding-medium-large);
  margin-top: var(--margin-medium);
  border-radius: 10px;
  transition: var(--animation-duration) all;
  &:hover {
    transform: scale(1.05);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NFContainer className="containers">
      <p>Page Not Found!</p>
      <h1>404</h1>
      <NFGoHome
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </NFGoHome>
    </NFContainer>
  );
};

export default NotFound;
