import { styled, pxToEM, theme } from "@/theme";
import { Box } from "@mui/material";

export const CodeEditorWrapper = styled(Box)`
  width: 100%;
  border: 2px solid ${theme.palette.border.main};
  border-radius: 6px;
  .ace-code-snippet {
    width: 100% !important;
    border-radius: inherit;
    height: 300px !important;
  }
`;
