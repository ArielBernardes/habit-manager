import styled from "styled-components";

export const ContainerAddGoals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  z-index: 10;

  padding: 5px;

  input {
    margin: 10px 0;
    padding: 10px;
  }

  input:hover {
    opacity: 0.7;
    border: 1px solid #fff;
    transition: 1s;
  }

  button {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    button {
      width: 150px;
    }
  }
`;
