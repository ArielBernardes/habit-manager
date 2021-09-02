import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { FiUser, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Back, Container } from "./styles";
import { Background } from "./styles";
import { Content } from "./styles";
import { AnimationContainer } from "./styles";
import { Redirect } from "react-router";
import { useAuth } from "../../Providers/auth";

const Login = () => {
  
  const viewport = window.innerWidth;
  const history = useHistory();
  const { signIn, auth } = useAuth();

  const schema = yup.object().shape({
    username: yup.string().required("Required Field"),
    password: yup
      .string()
      .required("Required Field")
      .min(6, "Min of 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    signIn(data, history);
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>

      { viewport > 768? <Header /> 
      :
        <Back onClick = {()=> history.push('/')}><span class="material-icons">arrow_back</span></Back>
      }
      <Container>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>Login</h1>
              <Input
                icon={FiUser}
                placeholder="Usuário"
                register={register}
                type="text"
                name="username"
                error={errors.username?.message}
              />
              <Input
                icon={FiLock}
                placeholder="Senha"
                type="password"
                register={register}
                name="password"
                error={errors.password?.message}
              />
              <br />
              <Button type="submit">Entrar</Button>
              <p>
                Ainda não tem uma <strong>conta</strong>? 
                <Link to="/register"> Cadastre-se</Link>.
              </p>
            </form>
          </AnimationContainer>
        </Content>
        <Background></Background>
      </Container>
    </div>
  );
};

export default Login;
