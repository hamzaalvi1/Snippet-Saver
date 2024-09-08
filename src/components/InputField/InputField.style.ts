import { FormLabel, TextField } from "@mui/material";
import { styled, pxToEM, theme } from "@/theme";

export interface StyledLabel {
  fontLabelColor?: string;
  fontLabelSize?: number;
  marginTopLabel?: number;
  marginBottomLabel?: number;
}
export const StyledLabel = styled(FormLabel)<StyledLabel>`
  &.MuiFormLabel-root {
    color: ${(props) => props?.fontLabelColor || theme.palette.text.primary};
    font-size: ${(props) => pxToEM(props?.fontLabelSize || 16)};
    margin-top: ${(props) => pxToEM(props?.marginBottomLabel || 0)};
    margin-bottom: ${(props) => pxToEM(props?.marginTopLabel || 5)};
    letter-spacing: 0.5px;
    font-weight: ${theme.typography.fontWeightMedium};
  }

  &.Mui-disabled {
    color: ${theme.palette.error.main};
  }
`;

export const StyledInputField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "isBorderNone",
})<{ isBorderNone?: boolean }>`
  .MuiInputBase-root {
    border-radius: 6px;
    padding-inline: ${pxToEM(15)};
    width: 100%;
    min-height: ${pxToEM(55)};
    color: ${theme.palette.text.primary};
    font-size: ${pxToEM(14)};

    input {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;

      &::placeholder {
        font-size: ${pxToEM(16)};
        color: ${(props) => props.theme.palette.text.secondary};
        opacity: 1;
      }
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-width: 2px;
    border-color: ${theme.palette.border.main};
    &:hover {
      border-color: ${theme.palette.primary.main};
    }
    ${({ isBorderNone }) => isBorderNone && `border:none`}
  }
  & input:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
    background-color: transparent !important;
  }
`;
