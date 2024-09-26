import React from "react";
import { AiTwotoneLike } from "react-icons/ai";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styled";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/102440318?v=4" />
          <div>
            <h4>Daniel Pedro</h4>
            <p>Ha 10 minutos </p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Xp Full Stack Developer</h4>
          <p>
            Projetos feito curso de .NET e React....
            <strong>Saiba Mais...</strong>
          </p>
        </PostInfo>
        <PostInfo>
          <h4>Randstad Digital</h4>
          <p>
            Projetos feito curso de .NET...
            <strong>Saiba Mais...</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#React #.NET</h4>
          <p>
            <AiTwotoneLike /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
