import {
  ContainerMobile,
  OptionsContainerMobile,
  CardsContainerMobile,
  ListCardsContainerMobile,
  ContainerPages,
} from "./styles";
import {
  ContainerDescktop,
  OptionsContainerDescktop,
  CardsContainerDesktop,
  ListCardsContainerDesktop,
} from "./styles";

import HeaderLogged from "../../components/HeaderLogged";
import Button from "../../components/Button";
import axios from "axios";
import { useContext } from "react";
import { CommunityContext } from "../../Providers/community";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import toast from "react-hot-toast";

const Community = () => {
  const viewport = window.innerWidth;
  const { CardsGroups, PageNext, PagePreview } = useContext(CommunityContext);

  const SubmitToSubscribe = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        `https://kabit-api.herokuapp.com/groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => toast.success("Inscrito com sucesso"))
      .catch(() => toast.error("Erro ao se inscrever"));
  };

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderLogged />

      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida</h2>
          <h4>Escolha uma opção: </h4>
          <ContainerPages>
            <button onClick={PageNext}>Proxima Pagina</button>
            <button onClick={PagePreview}>Pagina Anterior</button>
          </ContainerPages>
          <OptionsContainerMobile>
            <CardsContainerMobile>
              {CardsGroups.map((group, index) => (
                <ListCardsContainerMobile key={index}>
                  <h3>Nome: {group.name}</h3>
                  <p>Categoria: {group.category}</p>
                  <p>Descrição: {group.description}</p>
                  <Button onClick={() => SubmitToSubscribe(group.id)}>
                    Inscreva-se
                  </Button>
                </ListCardsContainerMobile>
              ))}
            </CardsContainerMobile>
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDescktop>
          <h1>Escolha seu grupo</h1>
          <ContainerPages>
            <button onClick={PageNext}>Proxima Pagina</button>
            <button onClick={PagePreview}>Pagina Anterior</button>
          </ContainerPages>
          <OptionsContainerDescktop>
            <CardsContainerDesktop>
              {CardsGroups.map((group, index) => (
                <ListCardsContainerDesktop key={index}>
                  <h3>Nome: {group.name}</h3>
                  <p>Categoria: {group.category}</p>
                  <p>Descrição: {group.description}</p>
                  <Button onClick={() => SubmitToSubscribe(group.id)}>
                    Inscreva-se
                  </Button>
                </ListCardsContainerDesktop>
              ))}
            </CardsContainerDesktop>
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Community;
