import React, { useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Layout from "../../components/Layout/Layout";
import { SocialLoginStyled } from "../../components/Login/SocialSignIn.styled";
import SocialSignIn from "../../components/Login/SocialSignin";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { CardContent } from "@mui/material";
import { CardWrapper } from "../../components/Login/Login.styled";

const PROVIDER_NAME = {
  FACEBOOK: "facebook",
  GOOGLE: "google",
};

export type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};

type AuthProps = {
  providers: Provider[];
};

const Auth = ({ providers }: AuthProps) => {
  const renderIcon = (providerId: string) => {
    const id = providerId.toLowerCase();

    switch (id) {
      case PROVIDER_NAME.GOOGLE:
        return {
          icon: <GoogleIcon fontSize="small" />,
          color: "red",
        };
      case PROVIDER_NAME.FACEBOOK:
        return {
          icon: <FacebookIcon fontSize="small" />,
          color: "#1976d2",
        };
      default:
        break;
    }
  };

  return (
    <Layout>
      <CardWrapper>
        <CardContent>
          {Object.values(providers).map((provider: Provider, index: number) => (
            <React.Fragment key={provider.name}>
              <SocialSignIn
                provider={provider}
                icon={renderIcon(provider.id)}
                isLast={index + 1 === Object.keys(providers).length}
              />
            </React.Fragment>
          ))}
        </CardContent>
      </CardWrapper>
    </Layout>
  );
};
export default Auth;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
