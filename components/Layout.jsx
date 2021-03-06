import React from "react";
import Head from "next/head";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#FAF9F6",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "#FAF9F6",
  };

  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar bg={bgColor[colorMode]} textColor={color[colorMode]} />
        </header>
        <main>
          <Flex
            as="main"
            justifyContent="center"
            flexDirection="column"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
          >
            {children}
          </Flex>
        </main>
        <footer>
          <Footer bg={bgColor[colorMode]} textColor={color[colorMode]} />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
