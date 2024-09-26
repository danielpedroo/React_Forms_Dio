import Banner_dio from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, TextContent } from "./styled";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            +1.750 cursos, bootcamps, projetos e formações nas carreiras de
            back-end, front-end, mobile, games, data, inteligência artificial &
            cloud para elevar o seu nível profissional e conquistar
            oportunidades nas empresas mais desejadas do mundo
          </TextContent>
          <Button
            title="Começar Agora !"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={Banner_dio} alt={"banner_dio"} />
        </div>
      </Container>
    </>
  );
};

export default Home;
