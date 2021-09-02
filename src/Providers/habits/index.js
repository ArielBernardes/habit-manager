import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (data, user) => {
    const {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
    } = data;
    console.log(user);
    api.post(
      "habits/",
      {
        title: title,
        category: category,
        difficulty: difficulty,
        frequency: frequency,
        achieved: achieved,
        how_much_achieved: how_much_achieved,
        user: user,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    ).then(() => toast.success("Hábito adicionado"));
  };

  const updateHabit = (habit) => {
    api.patch(
      `habits/${habit.id}/`,
      {
        achieved: true,
        how_much_achieved: "100",
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
  };

  const deleteHabit = (habit) => {
    api.delete(`habits/${habit.id}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }).then(() => toast.success("Hábito excluído"));;
  };

  const loadHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      });
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        addHabit,
        updateHabit,
        deleteHabit,
        loadHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
