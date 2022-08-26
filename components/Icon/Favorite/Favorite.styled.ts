import styled from "styled-components";

type FavIconWrapperProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  isFav?: boolean;
};

export const FavIconWrapper = styled.div<FavIconWrapperProps>`
  ${({ top, right, bottom, left }) =>
    (top || right || bottom || left) && "position: absolute;"}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  z-index: 3;
  cursor: pointer;

  svg {
    fill: ${({ theme, isFav }) => (isFav ? theme.redColor : theme.mainBgColor)};
    stroke: ${({ theme }) => theme.whiteOverlay};
    stroke-width: 1px;
    font-size: 1.8em;
  }
`;
