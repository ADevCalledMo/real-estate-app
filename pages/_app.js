import Head from "next/head";
import Router from "next/router";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customeTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import NProgress from "nprogress";

import Layout from "../components/Layout";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider resetCSS theme={customeTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: false,
          }}
        >
          <GlobalStyle>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
