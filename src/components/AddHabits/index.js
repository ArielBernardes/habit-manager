import {
  Container,
  ContainerButtons,
  ContainerInputs,
  Button2,
  ContainerDark,
} from "./styles";
import { useHabits } from "../../Providers/habits";
import { useUser } from "../../Providers/user";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddHabits = ({ setAddNewHabit }) => {
  const { addHabit } = useHabits();
  const { user } = useUser();

  const formSchema = yup.object().shape({
    title: yup.string().required("Titúlo Obrigatório!"),
    category: yup.string().required("Categoria Obrigatório!"),
    difficulty: yup.string().required("Dificuldade Obrigatória!"),
    frequency: yup.string().required("Frequência Obrigatório!"),
    achieved: yup.boolean().required("Item Obrigatório!"),
    how_much_achieved: yup.number().required("Item Obrigatório!"),
  });

  const {
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    addHabit(data, user);
    setAddNewHabit(0);
  };

  return (
    <>
    
      <ContainerDark>
        <Container onSubmit={handleSubmit(onSubmit)}>
          <h3>CADASTRAR HÁBITOS</h3>
          <ContainerInputs>
            <input placeholder="Título" {...register("title")}></input>
            <input placeholder="Categoria" {...register("category")}></input>
            <input placeholder="Dificuldade" {...register("difficulty")}></input>
            <input placeholder="Frequência" {...register("frequency")}></input>
            <input placeholder="Alcançado?" {...register("achieved")}></input>
            <input
              placeholder="Quanto foi alcançado?"
              {...register("how_much_achieved")}
            ></input>
          </ContainerInputs>
          <ContainerButtons>
            <Button2
              onClick={() => {
                setAddNewHabit(0);
              }}
            >
              CANCELAR
            </Button2>
            <Button2 type="submit">ADICIONAR</Button2>
          </ContainerButtons>
        </Container>
      </ContainerDark>
    </>
  );
};

export default AddHabits;
