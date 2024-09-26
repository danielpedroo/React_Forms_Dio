import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  RecoverContainer,
  ContainerKey,
  TitleRecover,
  SubTitle,
} from "./styled";

//Use Navigate
import { useNavigate } from "react-router-dom";

//Api Import - Axios
import { api } from "../../services/api";

//React Icons
import { ImRocket } from "react-icons/im";

//Hook Forms
import { useForm } from "react-hook-form";

//Hook Forms_Validation (YUP)
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormData } from "../login/types";
import { IRecoverData } from "./types";

const Recover = () => {
  //React Router - Navigate;
  const navigate = useNavigate();
  const handleCreateAccount = () => navigate("/register");

  //Schema validation - YUP
  const schemaValidation = yup
    .object({
      email: yup
        .string()
        .email("E-mail Invalido")
        .required("Campo Obrigatorio"),
    })
    .required();

  //Hook Forms
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverData>({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  //Email search in API
  const onSubmit = async (formData: IRecoverData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      console.log(data);
      if (data.length === 1) {
        alert("E-mail encontrado!");
      } else {
        alert("Email não encontrado!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <RecoverContainer>
        <TitleRecover>Recuperar Senha</TitleRecover>
        <ContainerKey>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              errorMessage={errors?.email?.message}
              control={control}
              placeholder="E-mail cadastrado"
              leftIcon={<ImRocket />}
            />
            <Button title="Recuperar Senha" variant="secondary" type="submit" />
          </form>
        </ContainerKey>
        <SubTitle>
          Ainda não tem uma conta gratuita?{" "}
          <span onClick={handleCreateAccount}>Criar conta</span>
        </SubTitle>
      </RecoverContainer>
    </>
  );
};

export default Recover;
