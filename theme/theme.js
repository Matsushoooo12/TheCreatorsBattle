import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.500",
        color: "gray.800",
      },
    },
  },
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {},
        secondary: {
          dialog: {
            maxW: "220px",
          },
        },
      },
    },
  },
});

export default theme;