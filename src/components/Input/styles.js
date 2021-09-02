import styled, { css } from "styled-components";

export const InputContainer1 = styled.div`
  border-radius: 10px;
  border: 2px solid var(--roxo-secundario);
  color: var(--roxo-secundario);

  width: 200px;
  display: flex;
  transition: 0.4s;

  border-bottom: 6px solid var(--roxo-secundario);
  border-right: 6px solid var(--roxo-secundario);

  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
      svg {
        color: red;
      }
    `}

  input {
    width: 200px;
    /* background: transparent; */
    align-items: center;
    font-size: 16px;
    border: 2px solid var(--roxo-secundario);
    border-radius: 8px;
    padding: 5px 0px 5px 10px;
    flex: 1;
    border: 0;
    color: var(--roxo-terciario);
    padding-left: 8px;
    height: 30px;
  }
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }

  svg {
    margin-top: 4px;
  }

  @media (min-width: 768px) {
    border-radius: 10px;
    border: 2px solid var(--roxo-secundario);
    color: var(--roxo-secundario);
    padding: 0.75rem;
    width: 100%;
    display: flex;
    transition: 0.4s;

    border-bottom: 6px solid var(--roxo-secundario);
    border-right: 6px solid var(--roxo-secundario);

    ${(props) =>
      props.isErrored &&
      css`
        border-color: red;
        svg {
          color: red;
        }
      `}

    input {
      /* background: transparent; */
      align-items: center;
      font-size: 16px;
      border: 2px solid var(--roxo-secundario);
      border-radius: 8px;
      padding: 5px 0px 5px 10px;
      flex: 1;
      border: 0;
      color: var(--roxo-terciario);
      padding-left: 8px;
      height: 32px;
    }
    input::placeholder {
      color: var(--roxo-secundario);
      font-size: 16px;
    }

    svg {
      margin-top: 4px;
    }
  }
`;
