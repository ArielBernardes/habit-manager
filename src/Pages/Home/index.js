import {Desktop,ContainerDesktop,ContainerButton } from "./styles";
import meditando from "../../images/medit.svg";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useAuth } from "../../Providers/auth";


const Home = () => {
  
  const { auth } = useAuth();
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  if(auth) {
    return <Redirect to ='/dashboard' />
  }

  return (
    <> 
      <Header></Header>
      <ContainerDesktop>
        <Desktop>
          <img src={meditando} alt="pessoa meditando" />
          <h1>Mente e corpo saudável!</h1>
          <h2>Comece sua mudança de hábitos</h2>
          <ContainerButton>
            <Button callback={handleLogin} children={"Login"} /> 
            <Button callback={handleRegister} children={"Sign Up"} />
          </ContainerButton>
        </Desktop>
      </ContainerDesktop>
    </>
  );
};
export default Home;
