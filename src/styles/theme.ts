import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "#0A0A16",
        color: "white",
      },
    },
  },
})
export default theme