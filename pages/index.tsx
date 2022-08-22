import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "../components/Background/VideoBackground";
import Content from "../components/Content/Content";
import Form from "../components/Form/Form";
import {
  Glassmorphism,
  GlassmorphismBackdrop,
} from "../components/Glassmorphism/Glassmorphism.styled";
import BaseModal from "../components/Modal/BaseModal";
import Nav from "../components/Nav/Nav";
import Posts from "../components/Posts/Posts";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getPosts, selectPostList } from "../store/post/postSlice";
import { wrapper } from "../store/store";

const Home: NextPage = () => {
  const postList = useAppSelector(selectPostList);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseModal isOpen />
      <div style={{ position: "relative" }}>
        <VideoBackground />
        <GlassmorphismBackdrop />
      </div>
      <Nav />
      <main style={{ width: "100%", height: "100%" }}>
        <Content />
      </main>
    </>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getPosts());
    }
);

export default Home;