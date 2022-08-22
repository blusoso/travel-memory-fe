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
} & BaseIconProps;

export const InputStyled = styled.input<InputStyledProps>`
  background-color: ${({ theme }) => theme.darkBgColor};
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
