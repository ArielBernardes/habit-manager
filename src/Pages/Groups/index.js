import HeaderLogged from "../../components/HeaderLogged";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { useHistory } from "react-router-dom";
import { ListCardsContainerDesktop } from "./styles";
import { useState } from "react";
import AddGroup from "../../components/AddGroup";
import EditGroup from "../../components/EditGroup";
import { UserContext } from "../../Providers/user";
import { useActivities } from "../../Providers/activity";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import Button from "../../components/Button";
import {
  Container,
  ContainerButtons,
  ContainerHabits,
  Content,
} from "../Habits/styles";

const Groups = () => {
  
  const history = useHistory();
  const { groups, nameGroup } = useContext(GroupsContext);
  const { user } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [register, setRegister] = useState(false);
  const { CreateActivity } = useActivities();

  const [id, setId] = useState("");

  const toSend = (path, id) => {
    nameGroup(id);
    CreateActivity(id);
    localStorage.setItem("id", JSON.stringify(id));
    return history.push(path);
  };

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <HeaderLogged />
        {register ? (
          <AddGroup setRegister={setRegister} />
        ) : (
          <>
            <h1>Grupos</h1>
            <Content>
              <ContainerHabits>
                {groups.map((group) => (
                  <ListCardsContainerDesktop key={group.id}>
                    {group.creator.id === Number(user) && (
                      <Button onClick={() => {setEdit(true); setId(group.id);}} children = 'Editar' />
                    )}
                    <div>
                      {edit && <EditGroup setEdit={setEdit} group={id} />}
                    </div>

                    <h4>nome:</h4>
                    <div>{group.name}</div>
                    <h4>Descrição:</h4>
                    <div>{group.description}</div>
                    <h4>Categoria:</h4>
                    <div>{group.category}</div>

                    <div>
                      <Button onClick={() => toSend("/activities", group.id)}>
                        Ver Atividades e Metas
                      </Button>
                    </div>
                  </ListCardsContainerDesktop>
                ))}
              </ContainerHabits>
              <ContainerButtons>
                <Button onClick={() => setRegister(true)}>criar grupo</Button>
              </ContainerButtons>
            </Content>
          </>
        )}
      </Container>
    </>
  );
};

export default Groups;
