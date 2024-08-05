import { PaletteOptions } from "@mui/material";

export type CustomPaletteOptions = PaletteOptions & {
  success: string;
  error: string;
  text: { primary: string; secondary: string };
};

export const colors: CustomPaletteOptions = {
  primary: {
    main: "#1a237e",
    light: "#304ffe",
  },
  secondary: {
    light: "#e6ee9c",
    main: "#cddc39",
  },
  success: "#00e676",
  error: "#d50000",
  text: {
    primary: "#424242",
    secondary: "#212121",
  },
  common: {
    white: "#fff",
    black: "#000",
  },
};
