import axios from "axios";

const url = "http://localhost:5000/posts";

export type NewPostType = {
  title: string;
  message: string;
  creator: string;
  tags?: string[];
  selectedFile: any;
};

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: NewPostType) => axios.post(url, newPost);
export const patchPost = (id: string, updatedPost: NewPostType) =>
  axios.patch(`${url}/${id}`, updatedPost);
