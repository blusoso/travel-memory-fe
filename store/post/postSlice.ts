import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./api";

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

type initialStateType = {
  postList: [];
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
      });
  },
});
export const selectPostList = (state: any) => state.post.postList;

export default postSlice.reducer;
