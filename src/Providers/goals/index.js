import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [showGoals, setShowGoals] = useState([]);
  const [oneGoal, setOneGoal] = useState([]);

  const CreateGoals = (data) => {
    api
      .post("goals/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => toast.sucess('Meta criada com sucesso'))
      .catch((err) => console.log('Erro ao criar meta'));
  };

  const ShowGoals = (id) => {
    api
      .get(`goals/?group=${id}&page=1`)
      .then((response) => setShowGoals(response.data.results))
      .catch((err) => toast.error('Erro ao mostrar metas'));
  };

  const UpdateGoals = (id) => {
    
    api
      .patch(
        `goals/${id}/`,
        {
          achieved: true
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then(() => toast.sucess('Atualizado com sucesso'))
      .catch((err) => console.log(err));
  };

  const DeleteGoals = (id) => {
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => toast.sucess('Deletado com sucesso'))
      .catch((err) => console.log(err));
  };

  const OneGoal = (id) => {
    api
      .get(`goals/${id}/`)
      .then((response) => setOneGoal([response.data]));
  };

  return (
    <GoalsContext.Provider
      value={{
        showGoals,
        CreateGoals,
        ShowGoals,
        UpdateGoals,
        DeleteGoals,
        OneGoal,
        oneGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
