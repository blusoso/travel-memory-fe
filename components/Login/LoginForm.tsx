import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../hooks/hooks";
import { signin } from "../../store/auth/authSlice";
import AuthForm, { AUTH_TYPE, UserData } from "../AuthForm/AuthForm";

type LoginFormProps = {
  onClickLink: () => void;
};

const LoginForm = ({ onClickLink }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLoginSubmit = (userData: UserData) => {
    const { email, password } = userData;

    dispatch(signin({ email, password }));
    router.push("/");
  };

  return (
    <>
      <AuthForm
        type={AUTH_TYPE.SIGN_IN}
        description="New user?"
        linkText="Create an account"
        onClickLink={onClickLink}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
};

export default LoginForm;
