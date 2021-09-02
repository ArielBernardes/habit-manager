import {
  MenuHeader,
  MenuButton,
  Menuhamburguer,
  ButtonFlexContainer,
  TresemmeLogo,
} from "./styles";
import { useHistory } from "react-router-dom";
import tresmLogowhite from "../../images/tresmLogowhite.png";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {

  const history = useHistory();
  const [MenuDrop, setMenuDrop] = useState(false);

  const toSend = (path) => {
    return history.push(path);
  };

  const OpenHamburguer = () => {
    setMenuDrop(true);
  };

  const CloseHamburguer = () => {
    setMenuDrop(false);
  };

  return (
    <>
      <MenuHeader>
        <TresemmeLogo src={tresmLogowhite} alt="Logo-written-white" onClick={() => toSend("/")} />
        {MenuDrop ? (
          <FiX onClick={CloseHamburguer} />
        ) : (
          <FiAlignJustify onClick={OpenHamburguer} />
        )}
        {MenuDrop ? (
          <Menuhamburguer>
           <nav>
             <ul>
                <li>
                  <MenuButton onClick = {()=> toSend("/register")}>SignUp</MenuButton>
                </li>
                <li>
                  <MenuButton onClick = {()=> toSend("/login")}>Login</MenuButton>
                </li>
                <li>
                  <MenuButton onClick = {()=> toSend("/about")}>About</MenuButton>
                </li>
             </ul>
            
           </nav>
          </Menuhamburguer>
        ) : (
          <></>
        )}

        <ButtonFlexContainer>
          <MenuButton onClick={() => toSend("/register")}>
            Cadastra-se
          </MenuButton>
          <MenuButton onClick={() => toSend("/login")}>Entrar</MenuButton>
          <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
        </ButtonFlexContainer>
      </MenuHeader>
    </>
  );
};
export default Header;
