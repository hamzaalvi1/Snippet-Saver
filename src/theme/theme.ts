"use client";

import { global } from "./global";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { createTheme, Theme } from "@mui/material/styles";

export interface CustomTheme {
  pxToEm: (value: number) => string;
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends Partial<CustomTheme> {}
}
export const theme = createTheme({
  breakpoints,
  palette: { ...colors },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...global,
      },
    },
  },
});
