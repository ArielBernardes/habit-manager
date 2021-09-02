import styled from "styled-components";
import Clouds from "../../images/Clouds.png";

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 15px;
    flex-wrap: wrap;
    h1 {
      left: 22.93%;
      right: 22.6%;
      margin-bottom: 11%;
      margin-top: 11.11%;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 100%;
      line-height: 19px;
      letter-spacing: 0.24em;
      color: #000000;
      img {
        width: 18%;
        height: 18%;
        margin-bottom: 0;
      }
    }
    img {
      width: 75%;
      height: 80%;
      left: 32px;
      top: 186px;
      margin-bottom: 20%;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 30%;
      margin-bottom: 5px;
      p {
        padding: 5px;
        font-family: HeadlandOne;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 108.1%;
        /* or 15px */

        letter-spacing: 0.05em;

        color: #a1a4b2;
      }
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  img {
    width: 40%;
    height: 40%;
  }
`;
export const Desktop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 80%;
  margin-top: 3rem;

  img {
    width: 28vw;
    height: 20vw;
    animation: go-back 1s infinite alternate;
  }
  @keyframes go-back {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
  h1 {
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 55px;
    color: var(--roxo-terciario);
  }

  h2 {
    color: var(--roxo-secundario);
    padding-bottom: 10px;
  }
`;

export const HomeBackground = styled.div`

  img {
    width: 100%;
    height: 87vh;
    position: absolute;
    z-index: -2;
  }
`;

export const ContainerDesktop = styled.div`
  background-image: url(${Clouds});
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 80px);
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 769px) {
    h1{
      font-size: 30px;
    }
    h2{
      font-size: 15px;
    }
  }
  
`;

export const ContainerButton = styled.div`
  button {
    margin: 10px 50px;
  }
`;