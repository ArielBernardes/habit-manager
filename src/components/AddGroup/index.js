import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useGroups } from "../../Providers/groups"
import { Container, ContainerButtons, ContainerInputs } from "./styles"
import Button from "../Button"
import * as yup from "yup";

const AddGroup = ({setRegister}) => {

    const {loadGroups, newGroup} = useGroups();
    const schema = yup.object().shape({
        name: yup.string().required('Nome Obrigatório'),
        description: yup.string().required('Descrição obrigatória'),
        category: yup.string().required('Categoria obrigatória')
    })

    const {register, handleSubmit} = useForm({resolver: yupResolver((schema))})

    const handleNewGroup = (data) => {
        newGroup(data);
        loadGroups();
        setRegister(false);
    }

    return (
        <>
            <Container onSubmit = {handleSubmit(handleNewGroup)}>
                <h3>Cadastrar Grupo</h3>
                <ContainerInputs>
                    <input placeholder = 'nome' {...register('name')} />
                    <input placeholder = 'descrição' {...register('description')} />
                    <input placeholder = 'categoria' {...register('category')} />
                </ContainerInputs>
                <ContainerButtons>
                    <Button callback = {()=> setRegister(false)} children = 'Cancelar' />
                    <Button type = 'submit'>Adicionar</Button>
                </ContainerButtons>
            </Container>
        </>
    )


}

export default AddGroup;
