import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { ThemeProvider as ThemeProviderStyledComponent } from "styled-components";
import { styledComponentTheme } from "../styles/styledComponentTheme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { muiTheme } from "../styles/muiTheme";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderStyledComponent theme={styledComponentTheme}>
      <ThemeProviderMui theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProviderMui>
    </ThemeProviderStyledComponent>
  );
}

export default wrapper.withRedux(MyApp);
