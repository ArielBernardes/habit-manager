import styled from 'styled-components'

export const Container = styled.div `
    height: 360px;
    width: 300px;
    border: 2px solid var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    justify-content: space-evenly;

    background: linear-gradient(177.48deg, #10002B 6.72%, #3C096C 30.84%, #8E97FD 77.98%);
    border-radius: 50px;
    h1{
        /* height: 40px; */
        color: var(--background);
        margin-top: 16px;
        font-size: 24px;
        text-align:center;

    }
`

export const ContainerInfos = styled.div `
    width: 90%;
    height: 180px;
    font-size: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 25px;
    color: var(--background);
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;

    h4{
        padding:4px 0;
        font-family: 'Arial';
        font-weight: 300;
    }
`

export const ContainerButtons = styled.div `
    display: flex;
    width: 90%;
    height: 40px;

    button + button{
        margin-left: 5px;
    }
`

