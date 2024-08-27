"use client";
import { pxToEM } from "@/theme";
import { MdFavoriteBorder } from "react-icons/md";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  lightfair,
  dark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Card, CardContent, IconButton, Chip, CardHeader } from "@mui/material";
const CodeSnippet: React.FC = () => {
  return (
    <Card elevation={0} sx={{ padding: pxToEM(20) }}>
      <CardHeader
        sx={{ padding: 0 }}
        title="Hello World"
        subheader="September 14, 2024"
        subheaderTypographyProps={{ variant: "subtitle1" }}
        titleTypographyProps={{ variant: "h3", mb: 2, component: "h3" }}
        action={
          <IconButton>
            <MdFavoriteBorder fontSize={22} />
          </IconButton>
        }
      />
      <CardContent
        sx={{ padding: 0, paddingBlock: 10, display: "flex", gap: 5 }}
      >
        <Chip title="function" label="function" color="primary" />
        <Chip title="function" label="function" color="primary" />
        <Chip title="function" label="function" color="primary" />
        <Chip title="function" label="function" color="primary" />
      </CardContent>
      <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
        `hello world`
      </SyntaxHighlighter>
    </Card>
  );
};

export default CodeSnippet;
