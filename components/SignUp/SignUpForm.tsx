import React from "react";
import AuthForm, { AUTH_TYPE } from "../AuthForm/AuthForm";

const SignUpForm = () => {
  return (
    <>
      <AuthForm
        type={AUTH_TYPE.SIGN_UP}
        description="Already have an account?"
        linkText="Sign in"
      />
    </>
  );
};

export default SignUpForm;
