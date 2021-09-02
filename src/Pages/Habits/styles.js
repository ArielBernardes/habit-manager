import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    color: var(--roxo-secundario);
    margin-top: 30px;
  }
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
  }
  @media screen and (min-width: 780px) {
    width: 90%;
    position: relative;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 780px) {
    position: absolute;
    width: 200px;
    top: 0px;
    right: 10px;
  }
`;
export const ContainerHabits = styled.div`
  @media screen and (min-width: 600px) {
    width: 600px;

    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 780px) {
    width: 100%;
    margin-top: 10px;
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }
`;
