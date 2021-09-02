import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Calibri';
}

:root {
    --roxo-primario: #8e97fd;
    --roxo-secundario: #3c096c;
    --roxo-terciario: #10002B;
    --background: #f6f2f0;
    --caixa-de-texto: #e0aaff;
    --sombra-box: rgba(0, 0, 0, 0.67);
    --gradiente: linear-gradient(177.48deg, #10002B 6.72%, #3C096C 30.84%, #8E97FD 77.98%);
    --gradiente-buttom: linear-gradient(to left, #7158E2,  #CD84F1)

}

button{
    cursor: pointer;
}

`;
