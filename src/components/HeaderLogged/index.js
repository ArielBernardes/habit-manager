import {MenuHeader, MenuButton, Menuhamburguer, ButtonFlexContainer, TresemmeLogo} from "./styles";
import { useHistory } from "react-router-dom";
import tresmLogowhite from "../../images/tresmLogowhite.png";
import { useAuth } from "../../Providers/auth";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const HeaderLogged = () => {
  const history = useHistory();
  const { setAuth } = useAuth();
  const [MenuDrop, setMenuDrop] = useState(false);

  const toSend = (path) => {
    return history.push(path);
  };

  const handleLogout = async () => {
    localStorage.clear();
    setAuth("");
    return await history.push("/login");
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
        <TresemmeLogo
          src={tresmLogowhite}
          alt="Logo-written-white"
          onClick={() => toSend("/dashboard")}
        ></TresemmeLogo>
        {MenuDrop ? (
          <FiX onClick={CloseHamburguer} />
        ) : (
          <FiAlignJustify onClick={OpenHamburguer} />
        )}
        {MenuDrop ? (
          <Menuhamburguer>
            <li>
              <MenuButton onClick={() => toSend("/Community")}>
                Comunidade
              </MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => toSend("/Habits")}>Hábitos</MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => toSend("/Groups")}>Grupos</MenuButton>
            </li>
            <li>
              <MenuButton onClick={handleLogout}>Sair</MenuButton>
            </li>
          </Menuhamburguer>
        ) : (
          <></>
        )}

        <ButtonFlexContainer>
          <MenuButton onClick={() => toSend("/Community")}>
            Comunidade
          </MenuButton>
          <MenuButton onClick={() => toSend("/Habits")}>Hábitos</MenuButton>
          <MenuButton onClick={() => toSend("/Groups")}>Grupos</MenuButton>
          <MenuButton onClick={handleLogout}>Sair</MenuButton>
        </ButtonFlexContainer>
      </MenuHeader>
    </>
  );
};
export default HeaderLogged;
