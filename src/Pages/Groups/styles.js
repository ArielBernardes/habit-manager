import styled, { css } from "styled-components";

export const ContainerMobile = styled.div`
  height: 90vh;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
  }

  h4 {
    color: gray;
    text-align: center;
  }
`;

export const BoxContainerMobile = styled.div`
  height: 22vh;
  background-color: blue;
  border: 2px solid black;
  width: 70vw;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const OptionsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
`;

//DESKTOP

export const ContainerDesktop = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .texto {
    font-family: Calibri;
  }
  .botao {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    button {
      margin-right: 25px;
      width: 18vh;
      height: 6vh;
      padding: 8px;
      border: none;
      border-radius: 20px;
      background: linear-gradient(275.76deg, #7158e2 44.33%, #cd84f1 98.56%);
      color: #fff;
      font-weight: bold;
      transition: 0.5s;
    }
    button:hover {
      background: #e0aaff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxContainerDesktop = styled.div`
  background-color: purple;
  height: 30vh;
  font-size: 20px;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OptionsContainerDesktop = styled.div`
  /* height: 400px; */
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  svg {
    z-index: 4;
    width: 50px;
    height: 50px;
    color: #fff;
  }
`;

export const InputContainerGroup = styled.div`
  /* background: var(--background); */
  border-radius: 10px;
  border: 2px solid var(--roxo-secundario);
  color: var(--roxo-secundario);
  padding: 4px;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  transition: 0.4s;
  background-color: var(--roxo-secundario);

  border-bottom: 6px solid var(--roxo-secundario);
  border-right: 6px solid var(--roxo-secundario);

  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
      svg {
        color: red;
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
    /* padding-left: 8px; */
    height: 32px;
  }
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }

  svg {
    margin-top: 4px;
  }
`;

export const ListCardsContainerDesktop = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 320px;
  margin: 5px 5px;
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  color: #fff;
  background: linear-gradient(
    177.48deg,
    #10002b 6.72%,
    #3c096c 30.84%,
    #8e97fd 77.98%
  );
  border-radius: 50px;
  font-size: 20px;

  /* button {
    width: 50%;
  } */

  hr {
    width: 80%;
  }
`;

export const ContainerNewUser = styled.div`
  text-align: center;
  font-family: Calibri;
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 3rem;
  }
  img {
    width: 18vw;
    height: 18vw;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .princ {
    display: flex;
    justify-content: space-around;
    width: 80vw;
    height: 30vw;
    align-items: center;
  }
  .opção {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 25vw;
    height: 19vw;
    h4 {
      margin-top: 5px;
    }
  }
`;
export const ContainerNewUserMobile = styled.div`
  text-align: center;
  font-family: Calibri;
  h3 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  img {
    width: 30vw;
    height: 30vw;
    margin-top: 10px;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .princ {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .opção {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 80vw;
    height: 50vw;
    margin-top: 10px;
  }
`;
