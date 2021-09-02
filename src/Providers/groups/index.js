import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");

  const loadGroups = () => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })

      .then((response) => setGroups(response.data));
  };

  useEffect(() => {
    loadGroups();
  },[groups]);

  const newGroup = (data) => {
    const { name, description, category } = data;
    axios
      .post(
        "https://kabit-api.herokuapp.com/groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then(() => toast.success("Criado com sucesso"))
      .catch(() => toast.error("Erro ao criar grupo"));
  };

  const editGroup = (data, group) => {
    axios
      .patch(`https://kabit-api.herokuapp.com/groups/${group}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => toast.success("Editado com sucesso"))
      .catch(() => toast.error("Erro ao editar"));
  };

  const nameGroup = (group) => {
    axios
      .get(`https://kabit-api.herokuapp.com/groups/${group}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => setGroupName(response.data.name))
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        newGroup,
        loadGroups,
        editGroup,
        nameGroup,
        groupName,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
