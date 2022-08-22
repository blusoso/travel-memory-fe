import styled from "styled-components";

export const GlassmorphismBackdrop = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ theme }) => theme.blurFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.blurFilter};
  z-index: -1;
`;

type GlassmorphismProps = {
  border?: string;
  padding?: string;
};

export const Glassmorphism = styled.div<GlassmorphismProps>`
  position: relative;
  background-color: ${({ theme }) => theme.mainBgColor};
  backdrop-filter: ${({ theme }) => theme.blurFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.blurFilter};
  color: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme, border }) => border || theme.borderRadius};
  padding: ${({ padding }) => padding || "1.3em"};
`;
