import axios from "axios";

const url = "http://localhost:5000/posts";

export type NewPostType = {
  _id?: string;
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
export const removePost = (id: string) => axios.delete(`${url}/${id}`);
export const likePost = (id: string, isLike: boolean) =>
  axios.patch(`${url}/${id}/like-post/${isLike}`);
