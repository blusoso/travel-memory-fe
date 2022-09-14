import { API } from "../api/api";

export type FormDataType = {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
};

export const signIn = (formData: FormDataType) =>
  API.post("/user/signin", formData);
export const signUp = (formData: FormDataType) =>
  API.post("/user/signup", formData);
