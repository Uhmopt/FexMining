import { createTheme } from "@mui/material";
import { PRIMARY_COLOR } from "./variable";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});
