import styled, { css } from "styled-components";

export const Container = styled.form `
    height: 320px;
    width: 350px;
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
    padding: 0 40px;
    border-radius: 8px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    h4{
        padding: 10px;
        text-align: center;
        font-family:'Calibri';
        color:var(--background);
        font-size: 24px;
    }
`


export const InputContainerGroup = styled.div`
/* background: var(--background); */
border-radius: 8px;
margin-top: 16px;
border: 1px solid var(--roxo-secundario);
color: var(--roxo-secundario);
border:0;
padding: 4px;
width: 100%;
display: flex;
flex-direction: column;
transition: 0.4s;
background-color: var(--roxo-secundario);

border-bottom: 4px solid var(--roxo-secundario);
border-right: 4px solid var(--roxo-secundario);

${props => props.isErrored && css`
border-color: red;
svg {
  color: red;
}
`}

input {
  /* background: transparent; */
  align-items: center;
  font-size: 16px;
  border: solid var(--roxo-secundario);
  border-radius: 8px;
  padding: 5px 0px 5px 10px;
  flex: 1;
  border: 0;
  color: var(--roxo-terciario);
  /* padding-left: 8px; */
  height:32px;
}
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }

svg {
  margin-top: 4px;
}
`;