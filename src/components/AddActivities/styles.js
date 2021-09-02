import styled from "styled-components";

export const ContainerAddActivities = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

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
    margin: 10px 0;
    padding: 10px;
  }

  input:hover {
    opacity: 0.7;
    border: 1px solid #fff;
    transition: 1s;
  }
`;
