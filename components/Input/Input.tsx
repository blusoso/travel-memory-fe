import React from "react";
import {
  IconInputWrapper,
  InputContainer,
  InputStyled,
  TextareaStyled,
} from "./Input.styled";

type InputProps = {
  type?: string;
  inputType?: string;
  name: string;
  placeholder?: string;
  width?: string;
  rows?: number;
  iconStart?: any;
  iconEnd?: any;
  autoFocus?: boolean;
  bgColor?: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const FORM_TYPE = {
  INPUT: "input",
  TEXTAREA: "textarea",
};

const Input = ({
  type = FORM_TYPE.INPUT,
  inputType = "text",
  name = "",
  placeholder,
  width,
  rows = 2,
  iconStart,
  iconEnd,
  autoFocus = false,
  bgColor,
  required = false,
  onChange,
}: InputProps) => {
  const renderInputForm = () => (
    <>
      {iconStart && <IconInputWrapper iconStart>{iconStart}</IconInputWrapper>}
      <InputStyled
        type={inputType}
        name={name}
        placeholder={placeholder}
        width={width}
        iconStart={iconStart ? true : false}
        iconEnd={iconEnd ? true : false}
        autoFocus={autoFocus}
        bgColor={bgColor}
        required={required}
        onChange={onChange}
      />
      {iconEnd && <IconInputWrapper iconEnd>{iconEnd}</IconInputWrapper>}
    </>
  );

  const renderTextareaForm = () => (
    <TextareaStyled
      name={name}
      placeholder={placeholder}
      width={width}
      rows={rows}
      autoFocus={autoFocus}
      bgColor={bgColor}
      required={required}
      onChange={onChange}
    />
  );

  const renderInputVariant = () => {
    switch (type) {
      case FORM_TYPE.INPUT:
        return renderInputForm();
      case FORM_TYPE.TEXTAREA:
        return renderTextareaForm();
      default:
        break;
    }
  };

  return <InputContainer>{renderInputVariant()}</InputContainer>;
};

export default Input;
