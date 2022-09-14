import { CardContent, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserAvatar from "../Avatar/UserAvatar";
import {
  CardWrapper,
  DotSeparate,
  ImageWrapper,
  UserAvatarWrapper,
} from "./PostCard.styled";
import { ThemeContext } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Post, updateLikeCount } from "../../store/post/postSlice";
import Favorite from "../Icon/Favorite/Favorite";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostMoreHorizon from "../Icon/MoreHorizon/PostMoreHorizon";
import { useAppDispatch } from "../../hooks/hooks";
import { UserLocalStorageData } from "../Nav/Nav";

const PREFIX_IMAGE_URL = "/assets/images";
const ICON_RIGHT_POSITION = "0.65em";

export const MORE_HORIZON_POST_ITEM_TEXT = {
  EDIT: "Edit",
  DELETE: "Delete",
};

const MORE_HORIZON_LIST = [
  {
    icon: <EditIcon fontSize="small" />,
    text: MORE_HORIZON_POST_ITEM_TEXT.EDIT,
  },
  {
    icon: <DeleteIcon fontSize="small" />,
    text: MORE_HORIZON_POST_ITEM_TEXT.DELETE,
  },
];

const slideImages = ["1.jpg", "2.jpg"];

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { secondaryColor } = useContext(ThemeContext);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userLoggedIn, setUserLoggedIn] = useState<
    UserLocalStorageData | undefined
  >(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("profile");
      if (user) {
        setUserLoggedIn(JSON.parse(user || "").result);
      }
    }
  }, []);

  const postImg =
    post.selectedFile || `${PREFIX_IMAGE_URL}/default/post-image.jpg`;

  const handleCard = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/${post._id}`);
  };

  const handleFavorite = (isFavorite: boolean) => {
    dispatch(updateLikeCount({ id: post._id, isLike: isFavorite }));
  };

  const renderIcon = () => (
    <>
      <Favorite
        top="0.8em"
        right={ICON_RIGHT_POSITION}
        onFavorite={handleFavorite}
      />
      {/* {userLoggedIn?.email === post.creator} */}
      <PostMoreHorizon listBox={MORE_HORIZON_LIST} post={post} />
    </>
  );

  return (
    <div style={{ position: "relative" }}>
      {renderIcon()}
      <CardWrapper onClick={handleCard}>
        <ImageWrapper>
          <img src={postImg} alt="cover" />
          {/* <Carousel
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
          </Carousel> */}
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
              2 - 7 August, 2022 <DotSeparate />{" "}
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default PostCard;
