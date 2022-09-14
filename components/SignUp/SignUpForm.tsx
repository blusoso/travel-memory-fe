import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  selectErrorMessage,
  selectIsError,
  signup,
} from "../../store/auth/authSlice";
import AuthForm, { AUTH_TYPE, UserData } from "../AuthForm/AuthForm";

type SignUpFormProps = {
  onClickLink: () => void;
};

const SignUpForm = ({ onClickLink }: SignUpFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const errorMessage = useAppSelector(selectErrorMessage);
  const isErrorSelector = useAppSelector(selectIsError);
  const [isError, setIsError] = useState(false);

  const handleSignUpSubmit = async (userData: UserData) => {
    await dispatch(signup(userData));
    router.push("/");
  };

  return (
    <>
      <AuthForm
        type={AUTH_TYPE.SIGN_UP}
        description="Already have an account?"
        linkText="Sign in"
        onClickLink={onClickLink}
        onSubmit={handleSignUpSubmit}
      />
    </>
  );
};

export default SignUpForm;
