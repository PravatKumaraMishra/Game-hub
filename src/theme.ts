import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#ffe3ff",
      100: "#ffb3f4",
      200: "#fc83e8",
      300: "#f952de",
      400: "#f622d4",
      500: "#dd09ba",
      600: "#ad0392",
      700: "#7c0068",
      800: "#4c0040",
      900: "#1e0019",
    },
  },
});

export default theme;
