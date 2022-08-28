import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createPost,
  fetchPosts,
  likePost,
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

export const updateLikeCount = createAsyncThunk(
  "post/updateLikeCount",
  async ({ id, isLike }: { id: string; isLike: boolean }) => {
    const { data } = await likePost(id, isLike);

    return data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {})
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postList = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.postList.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      .addCase(deletePost.fulfilled, (state, action) => {
        state.postList = state.postList.filter(
          (post) => post._id !== action.payload.id
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.status = STATE_STATUS.LOADING;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = STATE_STATUS.FAILED;
          state.error = action.error?.message;
          console.log(action.error?.message);
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = STATE_STATUS.LOADING;
        }
      )
      .addMatcher(
        isAnyOf(updatePost.fulfilled, updateLikeCount.fulfilled),
        (state, action) => {
          state.status = STATE_STATUS.SUCCEEDED;
          console.log(action.type);
          const updatedPost = state.postList.map((post) => {
            if (post._id === action.payload._id) {
              return action.payload;
            }
            return post;
          });
          state.postList = updatedPost;
        }
      );
  },
});

export const selectPostList = (state: any) => state.post.postList;

export default postSlice.reducer;
