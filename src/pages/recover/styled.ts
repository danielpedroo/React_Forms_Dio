import styled from "styled-components";

export const RecoverContainer = styled.div`
  width: 70vh;
  height: 450px;
  background-color: #151515;
  margin: 10% auto;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  border: 0;
  border-radius: 12px;

  span{
    font-weight: 700;
    color: #6AA542;
  }

  span:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ContainerKey = styled.div`
  width: 65%;
  height: 150px;


  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
  }
`

export const TitleRecover = styled.p`
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: 600;
  color: #932ED1;
`

export const SubTitle = styled.p`
  font-family: 'Open Sans';
  font-size: 16px;

  span{
    font-weight: 700;
  }

  span:hover{
    text-decoration: underline;
    cursor: pointer;
  }

`

