import styled from "styled-components";

export const Container = styled.form`
 
  width: 100vw;
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  color: #fff;
  background: linear-gradient(
    177.48deg,
    #10002b 6.72%,
    #3c096c 30.84%,
    #8e97fd 77.98%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px;
  height: 85vh;
  bottom: 5%;
  position: absolute;
  z-index: 2;
  @media screen and (min-width: 500px){
    border-radius: 24px;
    height: 500px;
    width: 350px;
    right: 38%;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;


  input {
    border: 0;
    background: none;
    margin: 7px auto;
    text-align: center;
    border: 2px solid #8e97fd;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    font-size: 15px;;
  }
  input:focus {
    width: 280px;
    border-color: #e0aaff;
  }
  input::placeholder{
    color: gray;
  }
`;

export const ContainerButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  button + button {
    margin-left: 5px;
  }
`;
export const Button2 = styled.button`
  border: 0;
  background: none;
  display: block;
  margin: 13px auto;
  margin-left: 1px;
  padding: 14px 33px;
  text-align: center;
  border: 2px solid #e0aaff;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  :hover {
    background: #e0aaff;
  }
`;

export const ContainerDark = styled.div`

  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px){
    height: 90vh;
  }


`;

