import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const animation404 = keyframes`
  from{
    transform: scale(0.95);
  }

  to {
    transform: scale(1.05);
  }
`;

const NFContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: var(--margin-large);
    font-size: var(--font-size-small);
  }
  h1 {
    font-size: calc(var(--font-size-large) * 2);
    color: var(--color-1);
    margin-top: var(--margin-medium);
    animation: ${animation404} 1500ms infinite linear;
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
        ホームへ
      </NFGoHome>
    </NFContainer>
  );
};

export default NotFound;
