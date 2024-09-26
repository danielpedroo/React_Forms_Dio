import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, Column } from "./styled";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight>#Ranking Top 4 da SEMANA!!!</TitleHighLight>
          <UserInfo
            percentual={50}
            nome={"Daniel Pedro"}
            image={"https://avatars.githubusercontent.com/u/102440318?v=4"}
          />
          <UserInfo
            percentual={50}
            nome={"Daniel Pedro"}
            image={"https://avatars.githubusercontent.com/u/102440318?v=4"}
          />
          <UserInfo
            percentual={50}
            nome={"Daniel Pedro"}
            image={"https://avatars.githubusercontent.com/u/102440318?v=4"}
          />
          <UserInfo
            percentual={50}
            nome={"Daniel Pedro"}
            image={"https://avatars.githubusercontent.com/u/102440318?v=4"}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
