import { Typography } from "@mui/material";
import React, { useState } from "react";
import Input, { INPUT_TYPE } from "../Input/Input";
import Grid from "@mui/material/Grid";
import { AuthFormStyled } from "./AuthForm.styled";
import { Button } from "@mui/material";

export const AUTH_TYPE = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign UP",
};

type AuthFormProps = {
  type: string;
  description: string;
  linkText: string;
};

const AuthForm = ({
  type = AUTH_TYPE.SIGN_IN,
  description,
  linkText,
}: AuthFormProps) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <>
      <Typography variant="h6" component="h6">
        <b>{type}</b>
      </Typography>
      <Typography component="p" sx={{ marginBottom: "1em" }}>
        {description}{" "}
        <span style={{ cursor: "pointer" }}>
          <u>{linkText}</u>
        </span>
      </Typography>
      <AuthFormStyled>
        {type === AUTH_TYPE.SIGN_UP && (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Input
                name="first_name"
                placeholder="First name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="last_name"
                placeholder="Last name"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        )}
        <Input name="email" placeholder="E-mail" onChange={handleChange} />
        <Input
          name="password"
          inputType={INPUT_TYPE.PASSWORD}
          placeholder="Password"
          onChange={handleChange}
        />
        {type === AUTH_TYPE.SIGN_UP && (
          <Input
            name="confirmPassword"
            inputType={INPUT_TYPE.PASSWORD}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        )}
      </AuthFormStyled>
      <Button variant="contained" onClick={handleSubmit}>
        {type}
      </Button>
    </>
  );
};

export default AuthForm;
