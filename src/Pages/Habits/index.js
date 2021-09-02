import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits";
import Habit from "../../components/Habit";
import { useHabits } from "../../Providers/habits";
import Button from "../../components/Button";
import {Container,Content,ContainerButtons,ContainerHabits} from "./styles";
import HeaderLogged from "../../components/HeaderLogged";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";

const Habits = () => {
  const { habits, loadHabits } = useHabits();
  const [addNewHabit, setAddNewHabit] = useState(0);

  useEffect(() => {
    loadHabits();
  }, [habits, loadHabits]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Container>
        <HeaderLogged />
        {addNewHabit ? (
          <AddHabits setAddNewHabit={setAddNewHabit} />
        ) : (
          <>
            <h1>Hábitos</h1>
            <Content>
              <ContainerHabits>
                {habits.map((habit) => (
                  <Habit key={habit.id} habit={habit}></Habit>
                ))}
              </ContainerHabits>
              <ContainerButtons>
                <Button onClick={() => {setAddNewHabit(1);}} children ='Criar Hábito' />
              </ContainerButtons>
            </Content>
          </>
        )}
      </Container>
    </>
  );
};

export default Habits;
