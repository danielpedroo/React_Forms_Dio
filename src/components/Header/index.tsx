import React from "react";
import { useNavigate } from "react-router-dom";
import logoDio  from "../../assets/logo_dio.svg";
import { Button } from "../Button";
import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  SearchInputContainer,
  UserPicture,
  Wrapper,
} from "./styled";
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logoDio} alt="Logo_dio" onClick={handleClickHome} />
          {autenticado ? (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado
            ? (<UserPicture src="https://avatars.githubusercontent.com/u/102440318?v=4" />)
            : (
                <>
                  <MenuRight href="#">Home</MenuRight>
                  <Button title="Entrar" />
                  <Button title="Cadastrar" />
                </>
              )
              } 
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
