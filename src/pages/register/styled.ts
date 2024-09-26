import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`;

export const TitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  width: 120%;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;
export const SubTitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const CreateAccount = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #e25dd7;
`;

export const CheckValidation = styled.div`
  width: 120%;
  height: 120%;
  margin-top: 25px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const CheckText = styled.div`
    display: inline;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
  }

  span {
    color: #6aa542;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`