import React, { useContext } from "react";
import { MoreHorizonIconWrapper } from "./MoreHorizon.styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ThemeContext } from "styled-components";
import { IconPositionProps } from "../Favorite/Favorite";

type MoreHorizonProps = { onClick: () => void } & IconPositionProps;

const MoreHorizon = ({
  top,
  left,
  right,
  bottom,
  onClick,
}: MoreHorizonProps) => {
  const { secondaryColor } = useContext(ThemeContext);

  return (
    <MoreHorizonIconWrapper
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      onClick={onClick}
    >
      <MoreHorizIcon sx={{ fill: secondaryColor }} />
    </MoreHorizonIconWrapper>
  );
};

export default MoreHorizon;
