import { MdEmail, MdLock } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input, InputCheckbox } from "../../components/Input";

//Api Import - Axios
import { api } from "../../services/api";

//Hook Forms
import { useForm } from "react-hook-form";

//Hook Forms_Validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Wrapper,
  Column,
  Title,
  TitleRegister,
  SubTitleRegister,
  CheckValidation,
  CheckText,
} from "./styled";
import { IRegister } from "./types";

const Register = () => {
  //Hook for navigation for files.
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");

  //Schema de validacao via - YUP
  const schemaValidation = yup
    .object({
      name: yup.string().min(15, "Nome Invalido").required("Campo obrigatorio"),
      email: yup
        .string()
        .email("E-mail Invalido")
        .required("Campo Obrigatorio"),
      password: yup
        .string()
        .min(3, "Minimo Tres Caracteres")
        .required("Campo Obrigatorio"),
      checkbox: yup
        .boolean()
        .oneOf([true], "Aceite os Termo e Politicas")
        .required("Você deve aceitar os termos e condições"),
    })
    .required();

  //Hook Forms
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  //Email search in API
  const onSubmit = async (formData: IRegister) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      if (data.length === 1) {
        alert("E-mail do usuario ja é cadastrado!");
      } else {
        alert("Cadastro feito com sucesso!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            a plataforma para você aprender com o experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis.</TitleRegister>
            <SubTitleRegister>
              Crie sua conta make the change._
            </SubTitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                placeholder="Nome Completo"
                errorMessage={errors?.name?.message}
                leftIcon={<FaUserLarge />}
              />
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                errorMessage={errors?.email?.message}
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                placeholder="Password"
                type="password"
                errorMessage={errors?.password?.message}
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <CheckValidation>
              <InputCheckbox
                name="checkbox"
                control={control}
                errorMessage={errors?.checkbox?.message}
                type="checkbox"
              />
              <CheckText>
                Declaro que aceito as politicas de privacidade e os Termos de
                uso da DIO{" "}
                <p>
                  Ja tenho conta.{" "}
                  <span onClick={handleLogin}>Fazer Login</span>
                </p>
              </CheckText>
            </CheckValidation>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
