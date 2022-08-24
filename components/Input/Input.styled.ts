import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

type BaseIconProps = {
  iconStart?: boolean;
  iconEnd?: boolean;
};

type InputStyledProps = {
  width?: string;
  bgColor?: string;
} & BaseIconProps;

export const InputStyled = styled.input<InputStyledProps>`
  background-color: ${({ theme, bgColor }) => bgColor || theme.darkBgColor};
  padding: ${({ iconStart, iconEnd }) =>
    iconStart
      ? "0.8em 1.2em 0.8em 3em"
      : iconEnd
      ? "0.8em 3em 0.8em 1.2em"
      : "0.8em 1.2em"};
  border-radius: 0.6em;
  border: 0;
  width: ${({ width }) => width || ""};
`;

type TextareaStyledProps = {
  width?: string;
  bgColor?: string;
};

export const TextareaStyled = styled.textarea<TextareaStyledProps>`
  background-color: ${({ theme, bgColor }) => bgColor || theme.darkBgColor};
  border-radius: 0.6em;
  border: 1px solid ${({ theme }) => theme.borderColor};
  width: ${({ width }) => width || ""};
  padding: 1em 1.2em;
  font-size: 1rem;
`;

type IconInputWrapperProps = {} & BaseIconProps;

export const IconInputWrapper = styled.div<IconInputWrapperProps>`
  position: absolute;
  top: 50%;
  ${({ iconStart }) => iconStart && "left: 5%"};
  ${({ iconEnd }) => iconEnd && "right: 5%"};
  transform: translate(0, -50%);
  display: inline-flex;

  svg {
    fill: ${({ theme }) => theme.secondaryColor};
  }
`;
