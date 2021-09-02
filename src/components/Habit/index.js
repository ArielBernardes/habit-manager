import Button  from "../Button"
import { Container, ContainerInfos, ContainerButtons } from "./styles"
import {useHabits} from "../../Providers/habits"

const Habit = ({habit}) => {

    const {updateHabit, deleteHabit} = useHabits();

    return(
        <Container>
            <h1>{habit.title}</h1>
            <ContainerInfos>
                <h4>Categoria: {habit.category}</h4>
                <h4>Dificuldade: {habit.difficulty}</h4>
                <h4>Frequência: {habit.frequency}</h4>
                <h4>Alcançado: {habit.achieved.toString()}</h4>
                <h4>Quanto alcançou: {habit.how_much_achieved}</h4>
            </ContainerInfos>
            <ContainerButtons>
                <Button callback ={() => deleteHabit(habit)}>Excluir</Button>
                <Button callback ={() => updateHabit(habit)}>Atualizar</Button>
            </ContainerButtons>
        </Container>
    )
}

export default Habit