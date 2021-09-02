import { useHistory } from "react-router"
import Button from "../../components/Button"
import Meditation from "../../images/medidate.png"
import { Container } from "./styles";

const NotFound = () => {

    const history = useHistory();

    const handleHome = () => {
        history.push('/');
    }

    return (

        <Container>
            <h1>Not Found</h1>
            <img src = {Meditation} alt = 'meditation img' />
            <Button callback = {handleHome} children = 'Voltar' />
        </Container>
    )
}

export default NotFound;