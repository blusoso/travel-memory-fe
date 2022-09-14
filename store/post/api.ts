import { API } from "../api/api";

const POST_PATH = "/posts";

export type NewPostType = {
  _id?: string;
  title: string;
  message: string;
  creator: string;
  tags?: string[];
  selectedFile: any;
};

export const fetchPosts = () => API.get(POST_PATH);
export const createPost = (newPost: NewPostType) =>
  API.post(POST_PATH, newPost);
export const patchPost = (id: string, updatedPost: NewPostType) =>
  API.patch(`${POST_PATH}/${id}`, updatedPost);
export const removePost = (id: string) => API.delete(`${POST_PATH}/${id}`);
export const likePost = (id: string, isLike: boolean) =>
  API.patch(`${POST_PATH}/${id}/like-post/${isLike}`);
