import React, { useState, useEffect } from "react";
import { FavIconWrapper } from "./Favorite.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type IconPositionProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type FavoriteProps = {
  onFavorite: (isFavorite: boolean) => void;
} & IconPositionProps;

const Favorite = ({ top, left, right, bottom, onFavorite }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    const toggleFav = !isFavorite;

    setIsFavorite(toggleFav);
    onFavorite(toggleFav);
  };

  return (
    <FavIconWrapper
      isFav={isFavorite}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      onClick={handleFavorite}
    >
      <FavoriteIcon />
    </FavIconWrapper>
  );
};

export default Favorite;
