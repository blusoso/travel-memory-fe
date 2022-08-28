import styled from "styled-components";

type SocialLoginStyledProps = {
  iconColor: string;
  isLast: boolean;
};

export const SocialLoginStyled = styled.button<SocialLoginStyledProps>`
  background: white;
  color: ${({ theme }) => theme.secondaryColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  padding: 1em 1.5em;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: ${({ isLast }) => (!isLast ? "0.5em" : "0")};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;

  svg {
    color: ${({ iconColor, theme }) => iconColor || theme.secondaryColor};
  }
`;
