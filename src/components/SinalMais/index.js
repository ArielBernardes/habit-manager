import {Container} from "./styles"
import {FiPlus} from "react-icons/fi"
const SinalMais = ({onClick}) => {
    return(
        <Container onClick ={onClick}>
            <FiPlus size={100} />
        </Container>
    )
}

export default SinalMais;