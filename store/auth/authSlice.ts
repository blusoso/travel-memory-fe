import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  userData: boolean;
};

const initialState: initialStateType = {
  userData: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
