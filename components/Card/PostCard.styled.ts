import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.contentBgColor};
  border: 1px solid ${({ theme }) => theme.mainBgColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  user-select: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  .carousel-root,
  .carousel-slider {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    object-fit: cover;
    object-position: center;
    border: 1px solid ${({ theme }) => theme.mainBgColor};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.8em;
  right: 0.65em;
  z-index: 3;

  svg {
    fill: ${({ theme }) => theme.mainBgColor};
    stroke: ${({ theme }) => theme.whiteOverlay};
    stroke-width: 1px;
    font-size: 1.8em;
  }
`;

export const UserAvatarWrapper = styled.div`
  position: absolute;
  bottom: -1em;
  right: 0.65em;
`;

export const CardContent = styled.div`
  padding: 1em 1.5em;
`;

export const Hr = styled.hr`
  border-color: ${({ theme }) => theme.secondaryColor};
`;

export const DotSeparate = styled.span`
  width: 4px;
  height: 4px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.contentBgColor};
  margin: 0 6px;
`;
