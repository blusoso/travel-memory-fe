import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

type UserAvatarProps = {
  letter?: string;
  image?: string;
  size?: number;
  onClick?: () => void;
};

const UserAvatar = ({ letter, image, size = 32, onClick }: UserAvatarProps) => {
  const { whiteOverlay } = useContext(ThemeContext);

  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        fontSize: 14,
        cursor: "pointer",
        border: `1px solid ${whiteOverlay}`,
      }}
      src={image ? image : ""}
      onClick={onClick}
    >
      {!!letter && letter}
    </Avatar>
  );
};

export default UserAvatar;
