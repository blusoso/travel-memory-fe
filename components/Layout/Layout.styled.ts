import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100%;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.mainBgColor};
  padding: 1.5em 3.5em;
`;
