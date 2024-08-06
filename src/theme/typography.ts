import { poppins } from "./fonts";
import { pxToEM } from "./functions";

import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseFontProperties = {
  fontFamily: `${poppins.style.fontFamily} , sans-serif`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToEM(10),
  fontSizeXS: pxToEM(12),
  fontSizeSM: pxToEM(14),
  fontSizeBase: pxToEM(16),
  fontSizeMD: pxToEM(20),
  fontSizeLG: pxToEM(24),
  fontSizeXL: pxToEM(28),
  fontSize2XL: pxToEM(32),
  fontSize3xl: pxToEM(36),
};

const typography: TypographyOptions = {
  fontFamily: baseFontProperties.fontFamily,
  fontSize: 16,
  fontWeightLight: baseFontProperties.fontWeightLight,
  fontWeightRegular: baseFontProperties.fontWeightRegular,
  fontWeightMedium: baseFontProperties.fontWeightMedium,
  fontWeightBold: baseFontProperties.fontWeightBold,

  h1: {
    fontSize: baseFontProperties.fontSize3xl,
    fontWeight: baseFontProperties.fontWeightBold,
  },
  h2: {
    fontSize: baseFontProperties.fontSize2XL,
    fontWeight: baseFontProperties.fontWeightBold,
  },
  h3: {
    fontSize: baseFontProperties.fontSizeXXS,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  h4: {
    fontSize: baseFontProperties.fontSizeXS,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  h5: {
    fontSize: baseFontProperties.fontSizeSM,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  h6: {
    fontSize: baseFontProperties.fontSizeBase,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  body1: {
    fontSize: baseFontProperties.fontSizeBase,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  caption: {
    fontFamily: baseFontProperties.fontFamily,
    fontSize: baseFontProperties.fontSizeSM,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  subtitle1: {
    fontFamily: baseFontProperties.fontFamily,
    fontSize: baseFontProperties.fontSizeMD,
    fontWeight: baseFontProperties.fontWeightRegular,
  },
  subtitle2: {
    fontFamily: baseFontProperties.fontFamily,
    fontSize: baseFontProperties.fontSizeSM,
    fontWeight: baseFontProperties.fontWeightBold,
  },
};

export { typography, baseFontProperties };