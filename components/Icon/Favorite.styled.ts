import styled from "styled-components";

type IconWrapperProps = {
  inset?: string;
  isFav?: boolean;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ inset }) => inset && "position: absolute;"}
  top: 0.8em;
  right: 0.65em;
  z-index: 3;
  cursor: pointer;

  svg {
    fill: ${({ theme, isFav }) => (isFav ? theme.redColor : theme.mainBgColor)};
    stroke: ${({ theme }) => theme.whiteOverlay};
    stroke-width: 1px;
    font-size: 1.8em;
  }
`;
