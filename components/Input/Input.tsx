import React from "react";
import { IconInputWrapper, InputContainer, InputStyled } from "./Input.styled";

type InputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  width?: string;
  iconStart?: any;
  iconEnd?: any;
};

const Input = ({
  type = "text",
  name = "",
  placeholder,
  width,
  iconStart,
  iconEnd,
}: InputProps) => {
  return (
    <InputContainer>
      {iconStart && <IconInputWrapper iconStart>{iconStart}</IconInputWrapper>}
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        width={width}
        iconStart={iconStart ? true : false}
        iconEnd={iconEnd ? true : false}
      />
      {iconEnd && <IconInputWrapper iconEnd>{iconEnd}</IconInputWrapper>}
    </InputContainer>
  );
};

export default Input;
