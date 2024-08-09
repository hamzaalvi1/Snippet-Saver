import { Button } from "@mui/material";

import { setFontSize, setPadding } from "@/utils/theme.utils";

import { styled, baseFontProperties, pxToEM } from "@/theme";

export interface IStyledButtonProps {
  color?: "primary" | "secondary";
  width?: number;
  height?: number;
  paddingInline?: number;
  paddingBlock?: number;
  fontSize?: number;
  fontWeight?: number;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "paddingBlock" && prop !== "paddingInline",
})<IStyledButtonProps>`
  &.MuiButton-root {
    border-radius: 6px;
    text-transform: unset;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: ${({ fontSize = 16 }) => setFontSize(fontSize)};
    box-shadow: none;
    font-weight: ${({ fontWeight = baseFontProperties.fontWeightRegular }) =>
      fontWeight};
    padding-inline: ${({ paddingInline = 30 }) => setPadding(paddingInline)};
    padding-block: ${({ paddingBlock = 10 }) => setPadding(paddingBlock)};

    ${({ width }) => width && `width: ${pxToEM(width)}`};
    ${({ height }) => height && `height: ${pxToEM(height)}`};
  }

  &.MuiButton-contained {
    border: 1px solid ${(props) => props.theme.palette[props.color!].main};
    background-color: ${(props) => props.theme.palette[props.color!].main};
    color: ${(props) => props.theme.palette.common.white};
  }

  &.MuiButton-outlined {
    border: 1px solid ${(props) => props.theme.palette[props.color!].main};
    background-color: transparent;
    color: ${(props) => props.theme.palette[props.color!].main};
  }

  &.Mui-disabled {
    background-color: #bf649a;
    border: 1px solid #9f5982;
    cursor: not-allowed;
  }
`;

export { StyledButton };
