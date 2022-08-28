import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { ThemeProvider as ThemeProviderStyledComponent } from "styled-components";
import { styledComponentTheme } from "../styles/styledComponentTheme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { muiTheme } from "../styles/muiTheme";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProviderStyledComponent theme={styledComponentTheme}>
        <ThemeProviderMui theme={muiTheme}>
          <Component {...pageProps} />
        </ThemeProviderMui>
      </ThemeProviderStyledComponent>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
