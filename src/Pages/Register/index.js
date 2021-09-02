import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Redirect, useHistory } from "react-router";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Background, Container,Content,AnimationContainer } from "./styles";
import { useAuth } from "../../Providers/auth";
import { Back } from "../Login/styles";

const Register = () => {
  const { auth } = useAuth();
  const history = useHistory();
  const viewport = window.innerWidth;

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    email: yup.string().required("Campo Obrigatório!").email("Email inválido!"),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser idênticas!")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (data) => {
    console.log(data);
    const { username, email, password } = data;
    console.log(data);
    axios
      .post("https://kabit-api.herokuapp.com/users/", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        reset();
        toast.success("Sucesso ao criar a conta.");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Erro ao criar a conta.");
        reset();
      });
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
        <Background></Background>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleRegister)}>
              <h1>Cadastre-se</h1>
              <div>
                <Input
                  icon={FiUser}
                  name="username"
                  placeholder="Usuário"
                  register={register}
                  error={errors.username?.message}
                />
              </div>
              <div>
                <Input
                  icon={FiMail}
                  name="email"
                  placeholder="Email"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div>
                <Input
                  icon={FiLock}
                  name="password"
                  placeholder="Senha"
                  register={register}
                  error={errors.password?.message}
                  type="password"
                />
              </div>
              <div>
                <Input
                  icon={FiLock}
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  register={register}
                  error={errors.confirmPassword?.message}
                  type="password"
                />
              </div>
              <br />
              <Button type="submit">Cadastrar</Button>
              <p>
                Já possui uma conta? <Link to="/login">Entrar</Link> 
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </Container>
    </div>
  );
};

export default Register;
