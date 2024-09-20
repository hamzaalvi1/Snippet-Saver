"use client";

import { Controller } from "react-hook-form";

import { HiOutlineCode } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { PiTagChevronFill } from "react-icons/pi";
import { Typography, Box, Stack, FormHelperText } from "@mui/material";
import { StyledDrawer } from "../Sidebar/Sidebar.style";
import { StyledAddCodeSnippetWrapper } from "./CodeSnippet.style";

import { MdOutlineTitle, MdDescription, MdLanguage } from "react-icons/md";

import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";
import { InputField, AutoComplete, Button, CodeEditor } from "@/components";

import { ProgrammingLanguages, EditorThemes } from "@/constants";
import { pxToEM, theme as MuiTheme } from "@/theme";

import { useAddSnippetContainer } from "./useAddSnippetContainer";

const AddSnippet = () => {
  const {
    theme,
    language,
    editorOpen,
    snippetControl,
    handleAddTags,
    handleSubmit,
    handleSelectTheme,
    handleSubmitSnippet,
    handleCloseSnippetEditor,
    handleFormatedEditorOptions,
  } = useAddSnippetContainer();

  return (
    <StyledDrawer
      elevation={0}
      anchor="right"
      open={editorOpen}
      drawerWidth={500}
      onClose={handleCloseSnippetEditor}
    >
      <StyledAddCodeSnippetWrapper>
        <Stack direction={"row"} gap={10} alignItems={"center"}>
          <Box
            sx={{ cursor: "pointer", userSelect: "none" }}
            onClick={handleCloseSnippetEditor}
          >
            <IoMdCloseCircle
              fontSize={35}
              color={MuiTheme.palette.text.secondary}
            />
          </Box>
          <Typography variant="h3" color={"primary.main"}>
            Add Code Snippet
          </Typography>
        </Stack>
        <Box sx={{ marginBlock: pxToEM(10) }}>
          <form onSubmit={handleSubmit(handleSubmitSnippet)}>
            <Stack gap={pxToEM(15)}>
              <InputField
                id="title"
                name="title"
                label="Title"
                showIcon={true}
                control={snippetControl}
                leftIcon={<MdOutlineTitle />}
                sxIconProps={{ fontSize: 18 }}
                placeholder="Add code title"
              />
              <Controller
                name="tags"
                control={snippetControl}
                render={({ field, fieldState: { error } }) => (
                  <AutoComplete
                    {...field}
                    id="tags"
                    label="Tags"
                    showIcon={true}
                    multiple={true}
                    leftIcon={<PiTagChevronFill />}
                    sxIconProps={{ fontSize: 18 }}
                    placeholder="Add code tags"
                    value={field.value}
                    error={error?.message}
                    onChange={(value) =>
                      handleAddTags(
                        value as AutoCompleteOptionType[],
                        field.onChange
                      )
                    }
                    options={[]}
                  />
                )}
              />
              <InputField
                rows={Infinity}
                multiLine={true}
                showIcon={true}
                id="description"
                name="description"
                label="Description"
                control={snippetControl}
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
                  showIcon={true}
                  value={theme}
                  onChange={(value) =>
                    handleSelectTheme(value as AutoCompleteOptionType)
                  }
                  leftIcon={<MdLanguage />}
                  placeholder="Select theme"
                  options={handleFormatedEditorOptions(EditorThemes)}
                  sxIconProps={{ fontSize: 18 }}
                />
                <Controller
                  name="language"
                  control={snippetControl}
                  render={({ field }) => (
                    <AutoComplete
                      {...field}
                      label="Language"
                      value={field.value}
                      onChange={(value) =>
                        field.onChange(value as AutoCompleteOptionType)
                      }
                      showIcon={true}
                      leftIcon={<HiOutlineCode />}
                      placeholder="Select language"
                      sxIconProps={{ fontSize: 18 }}
                      options={handleFormatedEditorOptions(
                        ProgrammingLanguages
                      )}
                    />
                  )}
                />
              </Stack>
              <Controller
                control={snippetControl}
                name="code"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Box>
                    <CodeEditor
                      placeholder="add your code snippet"
                      value={value}
                      onChange={onChange}
                      mode={language?.title}
                      error={error?.message}
                      theme={theme?.value as string}
                    />
                    {error?.message && (
                      <FormHelperText
                        error={!!error}
                        sx={{ marginLeft: pxToEM(10) }}
                      >
                        {error.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />

              <Button title="Add Code Snippet" type="submit" />
            </Stack>
          </form>
        </Box>
      </StyledAddCodeSnippetWrapper>
    </StyledDrawer>
  );
};

export default AddSnippet;
