import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../post/postSlice";

type initialStateType = {
  isOpen: boolean;
  selectedPost: Post | undefined;
};

const initialState: initialStateType = {
  isOpen: false,
  selectedPost: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;

      const post = action.payload.post;
      if (post) {
        state.selectedPost = post;
      }
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedPost = undefined;
    },
  },
});

export const selectIsOpen = (state: any) => state.modal.isOpen;
export const selectSelectedPost = (state: any) => state.modal.selectedPost;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
