"use client";

import { global } from "./global";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { pxToEM, spacing } from "./functions";
import { colors, CustomPaletteOptions } from "./colors";

import { createStyled } from "@mui/system";
import { createTheme, Theme } from "@mui/material/styles";

export interface CustomTheme {
  pxToEM: (value: number) => string;
  spacing: (factor: number) => string;
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends Partial<CustomTheme> {}
  interface Palette extends CustomPaletteOptions {}
}
const theme: Theme & CustomTheme = createTheme({
  breakpoints,
  palette: { ...colors },
  typography: { ...typography },
  pxToEM,
  spacing,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...global,
      },
    },
  },
});

const styled = createStyled({ defaultTheme: theme });

export { styled, theme };
