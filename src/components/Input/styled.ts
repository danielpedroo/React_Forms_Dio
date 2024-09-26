import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ErrText = styled.p`
  font-family: "Open Sans";

  color: #ff0000;
  font-size: 12px;
`;


export const IconContainer = styled.div`
  color: #e25dd7;
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 0;
  height: 30px;
`;

export const InputCheck = styled.input`
  margin: 5px 5px 0px -1px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
