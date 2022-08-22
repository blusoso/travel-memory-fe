import axios from "axios";

const url = "http://localhost:5000/posts";

type PostType = {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
};

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: PostType) => axios.post(url, newPost);
