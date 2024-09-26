import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

//Api Import - Axios
import { api } from "../../services/api";

//Hook Forms
import { useForm } from "react-hook-form";

//Hook Forms_Validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormData } from "./types";

import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  TitleLogin,
  SubTitleLogin,
  SubscribeKey,
  CreateAccount,
} from "./styled";

const Login = () => {
  //Navigation - Register
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");
  const handleRecoveryKey = () => navigate("/recover");

  //Schema validation Forms - YUP
  const schemaValidation = yup
    .object({
      email: yup
        .string()
        .email("E-mail nao e valido")
        .required("Campo Obrigatorio"),
      password: yup
        .string()
        .min(3, "Minimo Tres Caracteres")
        .required("Campo Obrigatorio"),
    })
    .required();

  //Hook Forms
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schemaValidation),
    mode: "onSubmit",
  });

  //Email and Password search in API
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        alert("Login feito com sucesso!");
        navigate("/feed");
      } else {
        alert("Usuario ou senha incorretos!");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Desbloqueie o seu próximo nível de conhecimento e seja contratado
            pelas maiores empresas de tecnologia do país
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <SubscribeKey onClick={handleRecoveryKey}>
                Esqueci minha senha
              </SubscribeKey>
              <CreateAccount onClick={handleRegister} type="submit">
                Criar minha conta
              </CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
