import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/auth"
import { useUser } from "../../Providers/user";
import * as yup from "yup";
import { Container, ContainerInputs } from "../AddHabits/styles";
import Button from "../Button";

const Username = ({setNewUsername}) => {
    const {changeName} = useAuth();
    const {user} = useUser();
    const schema = yup.object().shape({
        username: yup.string().required('usuário obrigatório')
    })

    const {register,handleSubmit} = useForm({resolver: yupResolver((schema))})

    const handleUsername = (data) => {
        changeName(data,user);
        setNewUsername(false)
    }
    return (
        <>
            <Container onSubmit = {handleSubmit(handleUsername)}>
                <h2>Novo usuário:</h2>
                <ContainerInputs>
                    <input placeholder = 'novo usuário'{...register('username')}></input>
                </ContainerInputs>
                <Button style={{marginBottom: 8}} callback = {()=> setNewUsername(false)}>Cancelar</Button>
                <Button type='submit'>Trocar</Button>
            </Container>
        </>
    )
}

export default Username;