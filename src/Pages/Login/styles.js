import styled, { keyframes, css } from "styled-components";
import tresmLogopurple from "../../images/tresmLogopurple.png";

export const Back = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  left: 20px;
  top: 30px;
  background: none;
  border: none;
  border-radius: 50%;
  &:hover {
    background-color: gray;
  }
`;
export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  align-items: stretch;
`;
export const Form = styled.form`
  display: flex;
`;
export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${tresmLogopurple}) no-repeat center, var(--caixa-de-texto);
    background-color: var(--caixa-de-texto);
    background-size: 480px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  max-width: 700px;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
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
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    /* padding-left: 10px; */
    width: 300px;
    text-align: center;
    h1 {
      color:var(--roxo-secundario);
      margin-bottom: 32px;
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
`;
export const InputContainer1 = styled.div`
  background: var(--background);
  border-radius: 10px;
  border: 2px solid var(--roxo-secundario);
  color: var(--roxo-secundario);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  border-bottom: 6px solid var(--roxo-secundario);
  border-right: 6px solid var(--roxo-secundario);
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}
  input {
    /* background: transparent; */
    align-items: center;
    font-size: 16px;
    border: 2px solid var(--roxo-secundario);
    border-radius: 8px;
    padding: 5px 0px 5px 10px;
    flex: 1;
    border: 0;
    color: var(--roxo-terciario);
    padding-left: 8px;
    height: 32px;
  }
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }
  svg {
    margin-right: 1;
  }
`;
