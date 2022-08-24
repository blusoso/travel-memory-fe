import React, { useState, useEffect } from "react";
import { IconWrapper } from "./Favorite.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

type FavoriteProps = {
  inset?: string;
  onFavorite: (isFavorite: boolean) => void;
};

const Favorite = ({ inset, onFavorite }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    onFavorite(isFavorite);
  }, [isFavorite, onFavorite]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <IconWrapper isFav={isFavorite} inset={inset} onClick={handleFavorite}>
      <FavoriteIcon />
    </IconWrapper>
  );
};

export default Favorite;
