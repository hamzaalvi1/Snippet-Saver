"use client";
import { pxToEM, theme } from "@/theme";

import Dayjs from "dayjs";
import { FaJs } from "react-icons/fa";
import { Chip, Checkbox } from "@/components";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdFavoriteBorder, MdFavorite, MdMoreVert } from "react-icons/md";
import { StyledCodeSnippet, StyledCardtContent } from "./CodeSnippet.style";
import {
  Card,
  IconButton,
  CardHeader,
  Typography,
  CardActions,
} from "@mui/material";
import SnippetMenu from "./SnippetMenu";

import { useCodeSnippetContainer } from "./useCodeSnippetContainer";
import { NormalizeCodeSnippetType } from "@/libs/codeSnippets";

interface ICodeSnippetProps {
  snippetData: NormalizeCodeSnippetType & { _id: string; createdAt: string };
}
const CodeSnippet: React.FC<ICodeSnippetProps> = (props) => {
  const { snippetData } = props;
  const { menuList, anchorEl, handleMenuOpen, handleMenuClose } =
    useCodeSnippetContainer();
  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: 2,
          padding: pxToEM(20),
          minHeight: pxToEM(350),
          alignContent: "baseline",
        }}
      >
        <CardHeader
          sx={{ padding: 0 }}
          title={snippetData?.title}
          subheader={Dayjs(snippetData?.createdAt).format("MMMM D, YYYY")}
          subheaderTypographyProps={{ variant: "subtitle1" }}
          titleTypographyProps={{ variant: "h3", mb: 2, component: "h3" }}
          action={
            <>
              <Checkbox
                checked={true}
                handleChange={() => {}}
                icon={
                  <MdFavoriteBorder
                    fontSize={22}
                    color={theme.palette.text.secondary}
                  />
                }
                checkedIcon={<MdFavorite fontSize={22} />}
              />
              <IconButton onClick={handleMenuOpen}>
                <MdMoreVert
                  fontSize={23}
                  color={theme.palette.text.secondary}
                />
              </IconButton>
            </>
          }
        />
        <StyledCardtContent>
          {snippetData?.tags?.map((tag, idx) => (
            <Chip label={tag} size="medium" key={idx} />
          ))}
        </StyledCardtContent>
        <StyledCardtContent>
          <Typography variant="subtitle1">
            {snippetData?.description}
          </Typography>
        </StyledCardtContent>
        <StyledCardtContent>
          <StyledCodeSnippet
            language={snippetData?.language}
            style={docco}
            showLineNumbers
          >
            {snippetData.code.trim()}
          </StyledCodeSnippet>
        </StyledCardtContent>
        <CardActions sx={{ padding: 0, justifyContent: "flex-end" }}>
          <FaJs fontSize={20} color={theme.palette.text.secondary} />
        </CardActions>
      </Card>
      <SnippetMenu
        menuList={menuList}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClick={handleMenuClose}
      />
    </>
  );
};

export default CodeSnippet;
