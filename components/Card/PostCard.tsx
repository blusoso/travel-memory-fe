import { CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import UserAvatar from "../Avatar/UserAvatar";
import {
  CardWrapper,
  DotSeparate,
  ImageWrapper,
  UserAvatarWrapper,
} from "./PostCard.styled";
import { ThemeContext } from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Post } from "../../store/post/postSlice";
import Favorite from "../Icon/Favorite";

const PREFIX_IMAGE_URL = "/assets/images";

const slideImages = ["1.jpg", "2.jpg"];

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { secondaryColor } = useContext(ThemeContext);
  const router = useRouter();

  const handleCard = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/${post._id}`);
  };

  const handleFavorite = (isFavorite: boolean) => {
    console.log(isFavorite);
  };

  return (
    <div style={{ position: "relative" }}>
      <Favorite inset="0.8em 0.65em" onFavorite={handleFavorite} />
      <CardWrapper onClick={handleCard}>
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
          <UserAvatarWrapper>
            <UserAvatar letter="M" />
          </UserAvatarWrapper>
        </ImageWrapper>
        <CardContent>
          <Typography
            component="p"
            sx={{ fontWeight: 600, letterSpacing: 0.3 }}
          >
            {post.title}
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
    </div>
  );
};

export default PostCard;
