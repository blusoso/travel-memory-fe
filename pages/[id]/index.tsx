import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>Post: {id}</Layout>;
};

export default Post;
