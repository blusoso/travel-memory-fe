import React from "react";
import AuthForm, { AUTH_TYPE } from "../AuthForm/AuthForm";

const LoginForm = () => {
  return (
    <>
      <AuthForm
        type={AUTH_TYPE.SIGN_IN}
        description="New user?"
        linkText="Create an account"
      />
    </>
  );
};

export default LoginForm;
