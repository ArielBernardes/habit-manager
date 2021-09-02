import { DevFlex } from "./styles";
import Header from "../../components/Header";

import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

const About = () => {

  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  }

  return (
    <>
      <Header />
      <DevFlex>
        <h1>Desenvolvido especialmente para sua saúde!</h1>
        <h2>Por quê?</h2>
        <p>Diversos estudos foram feitos para montar esta lista de benefícios comprovados que a meditação traz para a saúde física e mental:
          <ul>
            <li>
              Uma mente mais calma, focada e estável

            </li>
            <li>
              Melhoria na qualidade do sono
              
            </li>
            <li>
              Tensão e estresse reduzidos
              
            </li>
            <li>
                Uma autoconsciência mais apurada e melhor imagem de si mesmo
              
            </li>
            <li>
              Menores níveis de ansiedade, depressão e dor
              
            </li>
            <li>
              Benefícios físicos para a saúde, como diminuição da pressão sanguínea, melhora na imunidade e redução de inflamações
            </li>
          </ul>
        </p>
    

          <p> A importância da atividade física para a saúde está diretamente relacionada à melhoria da qualidade de vida, reduzindo consideravelmente os riscos de desenvolvimento de doenças cardiovasculares, diabetes, problemas relacionados a baixa imunidade, além dos transtornos de fundo emocional.</p>
        <Button callback = {handleLogin} children = 'Teste JÁ' />
      </DevFlex>
    </>
  );
};
export default About;
