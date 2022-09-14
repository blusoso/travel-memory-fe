import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormDataType, signIn, signUp } from "./authApi";

type initialStateType = {
  userData: boolean;
  errorMessage: string;
  isError: boolean;
};

const initialState: initialStateType = {
  userData: false,
  errorMessage: "",
  isError: false,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (formData: FormDataType) => {
    const { data } = await signIn(formData);

    return data;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (formData: FormDataType) => {
    const { data } = await signUp(formData);

    return data;
  }
);

const storeUserLocalStorage = (data: any) => {
  localStorage.setItem("profile", JSON.stringify({ ...data }));
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signin.pending, (state) => {})
      .addCase(signin.fulfilled, (state, action) => {
        storeUserLocalStorage(action.payload);
      })
      .addCase(signin.rejected, (state, action) => {
        state.errorMessage = action.error?.message || "";
      })
      .addCase(signup.pending, (state) => {})
      .addCase(signup.fulfilled, (state, action) => {
        storeUserLocalStorage(action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        state.isError = true;
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          console.log(action.error?.message);
        }
      );
  },
});

export const selectErrorMessage = (state: any) => state.auth.errorMessage;
export const selectIsError = (state: any) => state.auth.isError;

export default authSlice.reducer;
