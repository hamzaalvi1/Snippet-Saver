import { styled, pxToEM, theme } from "@/theme";
import { CardContent } from "@mui/material";
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
`;
