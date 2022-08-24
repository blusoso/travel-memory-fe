import { Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Post, selectPostList } from "../../store/post/postSlice";
import PostCard from "../Card/PostCard";

const Content = () => {
  const postList = useAppSelector(selectPostList);

  return (
    <Grid container spacing={3}>
      {postList.map((post: Post, index: number) => (
        <Grid key={`${post.title}-${index}`} item xs={12} sm={4} lg={3}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
