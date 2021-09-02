import { useContext, useEffect, useState } from "react";
import { useActivities } from "../../Providers/activity";
import { useGoals } from "../../Providers/goals";

import {
  ContainerMobile,
  CardsContainerMobile,
  ListCardsContainerMobile,
  OptionsContainerMobile,
  ContainerActivitiesGoals,
  ContainerInputs,
  ContainerTitleMobile,
  ContainerButton,
  ContainerCreateSearch,
  ContainerAddActive,
  Divisor,
} from "./styles";
import AddActivities from "../../components/AddActivities";
import AddGoals from "../../components/AddGoals";

import HeaderLogged from "../../components/HeaderLogged";
import { GroupsContext } from "../../Providers/groups";
import { useAuth } from "../../Providers/auth";
import { Redirect } from "react-router-dom";

const Activities = () => {
  const {
    showActivities,
    oneActives,
    OneActivities,
    UpdateActivities,
    DeleteActivity,
    LoadActivities
  } = useActivities();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isSearchGoal, setIsSearchGoal] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");

  const { showGoals, ShowGoals, UpdateGoals, DeleteGoals, OneGoal, oneGoal } =
    useGoals();

  const { groupName } = useContext(GroupsContext);
  const [idActive, setIdActive] = useState("");
  const [idGoal, setIdGoal] = useState("");

  const UpdateHere = () => {
    setIsUpdate(true);
  };
  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    setIsUpdate(false);
    UpdateActivities(data);
  };

  const handleGoalUpdate = (id, inputGoalUpdate) => {
    const data = { id: id, achieved: inputGoalUpdate };
    UpdateGoals(data);
    setIsUpdate(false);
  };

  //Active
  const handleSearch = (active) => {
    OneActivities(active);
    setIsSearch(false);
  };
  const handleIsSearch = () => {
    setIsSearch(true);
  };
  //**Active */

  //Goal
  const handleGoalSearch = (goal) => {
    setIsSearchGoal(false);
    OneGoal(goal);
  };

  const handleGoalClose = () => {
    setIsSearchGoal(true);
  };

  //Goal //

  useEffect(() => {
    LoadActivities(localStorage.getItem("id"));
  }, [LoadActivities]);

  useEffect(() => {
    ShowGoals(localStorage.getItem("id"));
  }, [showGoals, ShowGoals]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <ContainerMobile>
      <HeaderLogged />
      <ContainerTitleMobile>
        <h1>Atividades e Metas</h1>
        <h2>Grupo: {groupName}</h2>
      </ContainerTitleMobile>
      <ContainerActivitiesGoals>
        <OptionsContainerMobile>
          <h2>Atividades</h2>
          <ContainerCreateSearch>
            <ContainerAddActive>
              <AddActivities id={localStorage.getItem("id")} />
            </ContainerAddActive>
            {isSearch ? (
              <ContainerInputs>
                <input
                  value={idActive}
                  onChange={(e) => setIdActive(e.target.value)}
                  placeholder="Digite o numero da atividade"
                />
                <button onClick={() => handleSearch(idActive)}>Enviar</button>
              </ContainerInputs>
            ) : (
              <ContainerInputs>
                <button onClick={handleIsSearch}>Pesquisar</button>
              </ContainerInputs>
            )}
          </ContainerCreateSearch>
          <CardsContainerMobile>
            {idActive.length !== 0
              ? oneActives &&
                oneActives.map((active, index) => (
                  <ListCardsContainerMobile key={index}>
                    {active.title}
                    {isUpdate ? (
                      <button
                        onClick={() =>
                          handleUpdate(active.id, inputUpdate, active.group)
                        }
                      >
                        Enviar
                      </button>
                    ) : (
                      <button onClick={UpdateHere}>Atualizar</button>
                    )}{" "}
                    <button onClick={() => DeleteActivity(active.id)}>
                      Remover
                    </button>
                    {isUpdate ? (
                      <input
                        placeholder="Digite o novo nome"
                        value={inputUpdate}
                        onChange={(e) => setInpuUpdate(e.target.value)}
                      />
                    ) : (
                      <></>
                    )}
                  </ListCardsContainerMobile>
                ))
              : showActivities &&
                showActivities.map((active, index) => (
                  <ListCardsContainerMobile key={index}>
                    <div>
                      <h3>{active.title}</h3>
                    </div>
                    <div>{active.id}</div>
                    <div>{active.realization_time}</div>

                    <ContainerButton>
                      {isUpdate ? (
                        <button
                          onClick={() =>
                            handleUpdate(active.id, inputUpdate, active.group)
                          }
                        >
                          Enviar
                        </button>
                      ) : (
                        <button onClick={UpdateHere}>Atualizar</button>
                      )}{" "}
                      <button onClick={() => DeleteActivity(active.id)}>
                        Remover
                      </button>
                    </ContainerButton>
                    {isUpdate ? (
                      <input
                        placeholder="Digite o novo nome"
                        value={inputUpdate}
                        onChange={(e) => setInpuUpdate(e.target.value)}
                      />
                    ) : (
                      <></>
                    )}
                  </ListCardsContainerMobile>
                ))}
          </CardsContainerMobile>
        </OptionsContainerMobile>

        <Divisor>
          <hr />
        </Divisor>
        <OptionsContainerMobile>
          <h2>Metas</h2>

          <ContainerCreateSearch>
            <ContainerAddActive>
              <div>
                <AddGoals id={localStorage.getItem("id")} />
              </div>
            </ContainerAddActive>
            {isSearchGoal ? (
              <ContainerInputs>
                <input
                  value={idGoal}
                  onChange={(e) => setIdGoal(e.target.value)}
                  placeholder="Digite o numero da meta"
                />
                <button onClick={() => handleGoalSearch(idGoal)}>Enviar</button>
              </ContainerInputs>
            ) : (
              <ContainerInputs>
                <button onClick={handleGoalClose}>Pesquisar</button>
              </ContainerInputs>
            )}
          </ContainerCreateSearch>
          <CardsContainerMobile>
            {idGoal.length !== 0
              ? oneGoal &&
                oneGoal.map((goal, index) => (
                  <ListCardsContainerMobile key={index}>
                    {goal.title}
                    {isUpdate ? (
                      <button
                        onClick={() =>
                          handleGoalUpdate(goal.id, inputUpdate, goal.group)
                        }
                      >
                        Enviar
                      </button>
                    ) : (
                      <button onClick={UpdateHere}>Atualizar</button>
                    )}{" "}
                    <button onClick={() => DeleteGoals(goal.id)}>
                      Remover
                    </button>
                    {isUpdate ? (
                      <input
                        placeholder="Digite o novo nome"
                        value={inputUpdate}
                        onChange={(e) => setInpuUpdate(e.target.value)}
                      />
                    ) : (
                      <></>
                    )}
                  </ListCardsContainerMobile>
                ))
              : showGoals &&
                showGoals.map((goal, index) => (
                  <ListCardsContainerMobile key={index}>
                    <div>
                      <h3>{goal.title}</h3>
                    </div>
                    <div>{goal.difficulty}</div>
                    <div>{goal.how_much_achieved}</div>
                    <div>{goal.achieved.toString()}</div>
                    <div>{goal.id}</div>
                    <ContainerButton>
                      <button onClick={() => UpdateGoals(goal.id)}>
                        Atualizar
                      </button>

                      <button onClick={() => DeleteGoals(goal.id)}>
                        Remover
                      </button>
                    </ContainerButton>
                  </ListCardsContainerMobile>
                ))}
          </CardsContainerMobile>
        </OptionsContainerMobile>
      </ContainerActivitiesGoals>
    </ContainerMobile>
  );
};

export default Activities;
