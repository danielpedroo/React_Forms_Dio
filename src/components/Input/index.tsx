import React from "react";
import {
  InputContainer,
  IconContainer,
  InputText,
  InputCheck,
  ErrText,
} from "./styled";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      {errorMessage ? <ErrText>{errorMessage}</ErrText> : null}
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
    </>
  );
};

const InputCheckbox = ({ name, control, errorMessage }: IInput) => {
  return (
    <>
      {errorMessage ? <ErrText>{errorMessage}</ErrText> : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputCheck {...field} type="checkbox" />}
      />
    </>
  );
};

export { Input, InputCheckbox };
