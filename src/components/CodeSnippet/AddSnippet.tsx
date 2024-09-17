"use client";
import { useState } from "react";
import { useSnippertEditorStore } from "@/store";

import { IoMdCloseCircle } from "react-icons/io";
import { PiTagChevronFill } from "react-icons/pi";
import { Typography, Box, Stack } from "@mui/material";
import { StyledDrawer } from "../Sidebar/Sidebar.style";
import { MdOutlineTitle, MdDescription } from "react-icons/md";
import { StyledAddCodeSnippetWrapper } from "./CodeSnippet.style";

import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";
import { InputField, AutoComplete, Button, CodeEditor } from "@/components";

import { pxToEM, theme } from "@/theme";

const AddSnippet = () => {
  const { open: editorOpen, handleCloseEditor } = useSnippertEditorStore(
    (state) => state
  );

  const [tags, setTags] = useState<AutoCompleteOptionType[]>([]);

  const handleAddTags = (tagList: AutoCompleteOptionType[]) => {
    const updatedTagsList = tagList.map((tag) => {
      if (typeof tag === "string") {
        return { title: tag, value: tag } as AutoCompleteOptionType;
      }
      return tag;
    });
    setTags(updatedTagsList);
  };
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
              <CodeEditor />
              <Button title="Add Code Snippet" />
            </Stack>
          </form>
        </Box>
      </StyledAddCodeSnippetWrapper>
    </StyledDrawer>
  );
};

export default AddSnippet;
