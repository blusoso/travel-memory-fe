import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  fetchPosts,
  NewPostType,
  patchPost,
  removePost,
} from "./api";

export const ACTION_TYPE = {
  NONE: "NONE",
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
};

export const STATE_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export type Post = {
  _id: string;
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: any;
  likeCount: number;
  createdAt: Date;
};

type initialStateType = {
  postList: Post[];
  type: string;
  status: string;
  error: string | undefined;
};

const initialState: initialStateType = {
  postList: [],
  type: ACTION_TYPE.NONE,
  status: STATE_STATUS.IDLE,
  error: "",
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await fetchPosts();

  return data;
});

export const addPost = createAsyncThunk(
  "post/addPost",
  async (newPost: NewPostType) => {
    const { data } = await createPost(newPost);

    return data;
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (updatedPost: NewPostType) => {
    if (updatedPost._id) {
      const { data } = await patchPost(updatedPost._id, updatedPost);
      return data;
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id: string) => {
    const { data } = await removePost(id);
    return { data, id };
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.postList = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.postList.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;

        const updatedPost = state.postList.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        });
        state.postList = updatedPost;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.postList = state.postList.filter(
          (post) => post._id !== action.payload.id
        );
        console.log(action.payload);
      });
  },
});

export const selectPostList = (state: any) => state.post.postList;

export default postSlice.reducer;
