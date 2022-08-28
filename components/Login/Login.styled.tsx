import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.contentBgColor};
  border: 1px solid ${({ theme }) => theme.mainBgColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5em 1.3em;
  max-width: 40em;
  margin: auto;
  user-select: none;
`;
