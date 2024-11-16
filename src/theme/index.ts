import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import components from "./components";
import fonts from "./fonts";
import global from "./global";

const theme = extendTheme({
  styles: {
    global
  },
  fonts,
  colors,
  components
});

export default theme;
