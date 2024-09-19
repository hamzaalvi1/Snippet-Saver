"use client";

import { HiOutlineCode } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { PiTagChevronFill } from "react-icons/pi";
import { Typography, Box, Stack } from "@mui/material";
import { StyledDrawer } from "../Sidebar/Sidebar.style";
import { StyledAddCodeSnippetWrapper } from "./CodeSnippet.style";

import { MdOutlineTitle, MdDescription, MdLanguage } from "react-icons/md";

import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";
import { InputField, AutoComplete, Button, CodeEditor } from "@/components";

import { ProgrammingLanguages, EditorThemes } from "@/constants";
import { pxToEM, theme } from "@/theme";

import { useAddSnippetContainer } from "./useAddSnippetContainer";

const AddSnippet = () => {
  const {
    tags,
    editorOpen,
    handleAddTags,
    handleCloseEditor,
    handleFormatedEditorOptions,
  } = useAddSnippetContainer();

  return (
    <StyledDrawer
      elevation={0}
      anchor="right"
      open={editorOpen}
      drawerWidth={500}
      onClose={handleCloseEditor}
    >
      <StyledAddCodeSnippetWrapper>
        <Stack direction={"row"} gap={10} alignItems={"center"}>
          <Box
            sx={{ cursor: "pointer", userSelect: "none" }}
            onClick={handleCloseEditor}
          >
            <IoMdCloseCircle
              fontSize={35}
              color={theme.palette.text.secondary}
            />
          </Box>
          <Typography variant="h3" color={"primary.main"}>
            Add Code Snippet
          </Typography>
        </Stack>
        <Box sx={{ marginBlock: pxToEM(10) }}>
          <form>
            <Stack gap={pxToEM(15)}>
              <InputField
                id="title"
                name="title"
                label="Title"
                showIcon={true}
                leftIcon={<MdOutlineTitle />}
                sxIconProps={{ fontSize: 18 }}
                placeholder="Add code title"
              />
              <AutoComplete
                id="tags"
                label="Tags"
                showIcon={true}
                multiple={true}
                leftIcon={<PiTagChevronFill />}
                sxIconProps={{ fontSize: 18 }}
                placeholder="Add code tags"
                value={tags}
                onChange={(value) =>
                  handleAddTags(value as AutoCompleteOptionType[])
                }
                options={[]}
              />
              <InputField
                rows={Infinity}
                multiLine={true}
                showIcon={true}
                id="description"
                name="description"
                label="Description"
                leftIcon={<MdDescription />}
                sxIconProps={{
                  fontSize: 20,
                  svg: {
                    display: "flex !important",
                    alignSelf: "flex-end !important",
                  },
                }}
                placeholder="Add code descriptions"
              />

              <Stack gap={10} direction={"row"}>
                <AutoComplete
                  label="Theme"
                  options={handleFormatedEditorOptions(EditorThemes)}
                  value={null}
                  onChange={() => {}}
                  placeholder="Select theme"
                  showIcon={true}
                  leftIcon={<MdLanguage />}
                  sxIconProps={{ fontSize: 18 }}
                />
                <AutoComplete
                  label="Language"
                  options={handleFormatedEditorOptions(ProgrammingLanguages)}
                  value={null}
                  onChange={() => {}}
                  showIcon={true}
                  leftIcon={<HiOutlineCode />}
                  sxIconProps={{ fontSize: 18 }}
                  placeholder="Select language"
                />
              </Stack>
              <CodeEditor value={"null"} onChange={() => {}} />
              <Button title="Add Code Snippet" />
            </Stack>
          </form>
        </Box>
      </StyledAddCodeSnippetWrapper>
    </StyledDrawer>
  );
};

export default AddSnippet;
