import styled from "styled-components";

export const ContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitleMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h1 {

    color: var(--roxo-secundario);
    font-size: 45px;
  }

  h2 {

    color: var(--roxo-secundario);
    margin: 20px 0;
    font-size: 28px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 35px;
    }
  }
`;

export const ContainerActivitiesGoals = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ContainerCreateSearch = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin: 20px 10px;

  input {
    width: 100%;
    border-radius: 10px;
    border: none;
    background: var(--roxo-secundario);
    font-weight: bold;
    color: #fff;
    ::placeholder {
      color: #fff;
    }
  }

  input:hover {
    opacity: 0.8;
  }

  button {
    width: 150px;
    font-size: 16px;
  }

  button:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    transition: 1s;
  }

  @media (min-width: 769px) {
    width: 100%;

    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerInputs = styled.div`
  width: 225px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: var(--gradiente);
  margin-bottom: 5px;

  button {
    width: 150px;
    padding: 8px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
    font-weight: bold;
  }

  button:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    transition: 1s;
  }

  input {
    width: 90%;
    margin: 10px 0;
    padding: 9px;
  }

  @media (min-width: 500px) {
    width: 250px;
    input {
      width: 80%;
    }
    input:hover {
      opacity: 0.7;
      border: 1px solid #fff;
      transition: 1s;
    }
    button {
      width: 150px;
    }
  }
`;

export const ContainerAddActive = styled.div`
  width: 225px;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: var(--gradiente);
  padding: 5px 0;

  button:hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  @media (min-width: 500px) {
    width: 250px;
  }
`;

export const OptionsContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  h2{

    color: var(--roxo-secundario);
  }

  @media (min-width: 500px) {
    width: 45%;
  }
`;

//lista dos grupos
export const CardsContainerMobile = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ListCardsContainerMobile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 220px;
  height: 150px;
  margin: 5px 0;
  border-radius: 20px;
  background-image: var(--gradiente);
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  background-color: var(--roxo-secundario);
  color: #fff;
  text-align: center;

  input {
    padding: 8px 0;
    border: none;
    border-radius: 10px;
  }
  input:hover {
    opacity: 0.7;
    border: 1px solid #fff;
    transition: 1s;
  }

  .button-update {
    display: flex;
  }
  button {
    width: 35%;
    padding: 5px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
  }

  button:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    transition: 1s;
  }

  @media (min-width: 769px) {
    width: 40%;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  button {
    width: 35%;
    padding: 5px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
  }

  button:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    transition: 1s;
  }
`;

export const Divisor = styled.div`
  width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  border: 0.5px solid black;

  @media (min-width: 768) {
    width: 1px;
    flex-direction: column;
  }
`;
