"use client";
import { pxToEM, theme } from "@/theme";

import { Chip } from "@/components";
import { FaTrash } from "react-icons/fa6";
import { FaJs, FaClipboard } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { StyledCodeSnippet, StyledCardtContent } from "./CodeSnippet.style";
import {
  Card,
  IconButton,
  CardHeader,
  Typography,
  CardActions,
} from "@mui/material";
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
          <>
            <IconButton>
              <FaClipboard fontSize={18} color={theme.palette.text.secondary} />
            </IconButton>
            <IconButton>
              <MdFavoriteBorder
                fontSize={22}
                color={theme.palette.text.secondary}
              />
            </IconButton>
          </>
        }
      />
      <StyledCardtContent>
        <Chip label="hello world" size="medium" />
        <Chip label="hello world" size="medium" />
        <Chip label="hello world" size="medium" />
        <Chip label="hello world" size="medium" />
      </StyledCardtContent>
      <StyledCardtContent>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ab
          repellendus adipisci incidunt ea in voluptatum suscipit odit earum
          magnam, quo ipsam voluptate totam est autem dolorem inventore omnis
          officia!
        </Typography>
      </StyledCardtContent>
      <StyledCardtContent>
        <StyledCodeSnippet language="javascript" style={docco} showLineNumbers>
          `hello world`
        </StyledCodeSnippet>
      </StyledCardtContent>
      <CardActions sx={{ padding: 0, justifyContent: "space-between" }}>
        <FaJs fontSize={20} color={theme.palette.text.secondary} />
        <IconButton>
          <FaTrash fontSize={16} color={theme.palette.text.secondary} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CodeSnippet;
