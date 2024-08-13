import { PaletteOptions } from "@mui/material";

export type CustomPaletteOptions = PaletteOptions & {
  border: {
    light: string;
    main: string;
    dark: string;
    contrast: string;
    extraLight: string;
  };
  text: { primary: string; secondary: string };
  whiteVariants: { light: string };
};

export const colors: CustomPaletteOptions = {
  primary: {
    main: "#7F265B",
    light: "#304ffe",
  },
  secondary: {
    light: "#e6ee9c",
    main: "#FFE6C9",
  },
  success: {
    main: "#00e676",
  },
  error: {
    main: "#d50000",
  },
  text: {
    primary: "#555555",
    secondary: "#828282",
  },
  common: {
    white: "#fff",
    black: "#000",
  },
  border: {
    light: "#e0e0e0",
    main: "#DED2D9",
    dark: "#b2b2b2",
    contrast: "#C8CBD9",
    extraLight: "#ebebee",
  },
  whiteVariants: {
    light: "#F1F6FF",
  },
};
