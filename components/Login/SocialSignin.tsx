import React, { useEffect } from "react";
import { SocialLoginStyled } from "./SocialSignIn.styled";
import { signIn } from "next-auth/react";
import { Provider } from "../../pages/auth";

export type SocialIcon = {
  icon: JSX.Element;
  color: string;
};

type SocialSignInProps = {
  provider: Provider;
  icon: SocialIcon | undefined;
  isLast: boolean;
};

const SocialSignIn = ({ provider, icon, isLast }: SocialSignInProps) => {
  return (
    <>
      {icon && (
        <SocialLoginStyled
          iconColor={icon.color}
          isLast={isLast}
          onClick={() => signIn(provider.id)}
        >
          {icon.icon}
          Sign in with {provider.name}
        </SocialLoginStyled>
      )}
    </>
  );
};

export default SocialSignIn;
