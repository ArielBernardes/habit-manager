import { StyledButton } from "./styles";

const Button = ({ callback, children,...rest}) => {
  return <StyledButton type="button" onClick={callback} {...rest}> {children} </StyledButton>;
};

export default Button;
