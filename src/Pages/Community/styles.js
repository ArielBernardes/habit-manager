import styled from "styled-components";

export const ContainerMobile = styled.div`
  height: 90vh;
  position: relative;

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

//lista dos grupos
export const CardsContainerMobile = styled.ul`
  margin-top: 1900px;
`;
export const ListCardsContainerMobile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 250px;
  height: 150px;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  background-color: var(--roxo-secundario);
  color: #fff;
  text-align: center;

  button {
    width: 50%;
  }
`;

//DESKTOP

export const ContainerDescktop = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: var(--roxo-secundario);
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BoxContainerDescktop = styled.div`
  background-color: purple;
  height: 30vh;
  font-size: 20px;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OptionsContainerDescktop = styled.div`
  height: 50vh;
  width: 90vw;
  display: flex;
  justify-content: space-around;
`;

//lista dos grupos
export const CardsContainerDesktop = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
export const ListCardsContainerDesktop = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 320px;
  margin: 5px 0;
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
  font-family: "Arial";

  h3 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  button {
    width: 50%;
  }

  hr {
    width: 80%;
  }
`;

export const ContainerPages = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /* background-color: red; */

  button {
    width: 45%;
    padding: 5px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
    margin: 0 10px;
  }

  button:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    transition: 1s;
  }
`;
