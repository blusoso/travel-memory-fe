import styled from "styled-components";

type MoreHorizonIconWrapperProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export const MoreHorizonIconWrapper = styled.div<MoreHorizonIconWrapperProps>`
  ${({ top, right, bottom, left }) =>
    (top || right || bottom || left) && "position: absolute;"}
  ${({ top }) => top && `top: ${top};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    ${({ left }) => left && `left: ${left};`}
    ${({ right }) => right && `right: ${right};`}
  z-index: 3;
  cursor: pointer;
`;
