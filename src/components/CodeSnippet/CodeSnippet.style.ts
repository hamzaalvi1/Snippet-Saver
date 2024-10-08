import { styled, pxToEM, theme } from "@/theme";
import { CardContent, Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";

export const StyledCardtContent = styled(CardContent)`
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  padding-block: ${pxToEM(10)};
  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledCodeSnippet = styled(SyntaxHighlighter)<{
  language: string;
}>`
  border-radius: 5px;
  background-color: ${theme.palette.whiteVariants.light} !important;
  width: 100%;
  font-size: ${pxToEM(18)};
  min-height: ${pxToEM(85)};
  max-height: ${pxToEM(245)};

`;

export const StyledAddCodeSnippetWrapper = styled(Box)`
  padding: ${pxToEM(20)};
  display: flex;
  flex-direction: column;
`;
