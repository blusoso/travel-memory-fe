import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isOpen: boolean;
};

const initialState: initialStateType = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const selectIsOpen = (state: any) => state.modal.isOpen;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
