import styled, { keyframes} from "styled-components";
import tresmLogowhite from "../../images/tresmLogowhite.png";

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${tresmLogowhite}) no-repeat center, var(--roxo-secundario);
    background-color: var(--roxo-secundario);
    background-size: 480px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(50px)
	}
	to {
		opacity: 1;
		transform: translateX(0px)
	}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    width: 300px;
    text-align: center;

    h1 {
      color: var(--roxo-secundario);
      font-size: 2.5rem;
      font-family: "Calibri";
    }

    > div {
      margin-top: 16px;
    }

    p {
      margin-top: 24px;

      a {
        font-weight: bold;
        color: var(--roxo-secundario);
        text-decoration: none;
      }
    }
  }

  @media (max-width: 769px) {
    margin-top: 15vh;
    form {
      h1 {
        font-size: 25px;
      }
    }
    
  }
`;


