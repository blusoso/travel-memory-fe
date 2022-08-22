import { CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserAvatar from "../Avatar/UserAvatar";
import {
  CardWrapper,
  DotSeparate,
  IconWrapper,
  ImageWrapper,
  UserAvatarWrapper,
} from "./Card.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ThemeContext } from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PREFIX_IMAGE_URL = "/assets/images";

const slideImages = ["1.jpg", "2.jpg"];

const Card = () => {
  const { secondaryColor } = useContext(ThemeContext);

  return (
    <CardWrapper>
      <ImageWrapper>
        {/* <Image
          src={`${PREFIX_IMAGE_URL}/luca-bravo.jpg`}
          alt="cover"
          layout="fill"
        /> */}
        <Carousel
          showArrows={true}
          emulateTouch
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {slideImages.map((slideImage, index) => (
            <img
              key={`${slideImage}-${index}`}
              src={`${PREFIX_IMAGE_URL}/${slideImage}`}
              alt="cover"
            />
          ))}
        </Carousel>
        <IconWrapper>
          <FavoriteIcon />
        </IconWrapper>
        <UserAvatarWrapper>
          <UserAvatar letter="M" />
        </UserAvatarWrapper>
      </ImageWrapper>
      <CardContent>
        <Typography component="p" sx={{ fontWeight: 600, letterSpacing: 0.3 }}>
          Lago di Braies, Italy
        </Typography>
        <div style={{ display: "flex", alignItems: "left" }}>
          <Typography
            component="p"
            sx={{
              color: secondaryColor,
              fontSize: "0.9em",
              marginRight: "auto",
            }}
          >
            2 - 7 August, 2022 <DotSeparate /> 3 mins ago
          </Typography>
          <MoreHorizIcon sx={{ fill: secondaryColor }} />
        </div>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
