"use client";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { MdOutlineTitle } from "react-icons/md";
import { PiTagChevronFill } from "react-icons/pi";
import { StyledDrawer } from "../Sidebar/Sidebar.style";
import { StyledAddCodeSnippetWrapper } from "./CodeSnippet.style";
import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";

import { InputField, AutoComplete } from "@/components";

import { pxToEM } from "@/theme";
const AddSnippet = () => {
  const [value, setValue] = useState<AutoCompleteOptionType[]>([]);
  return (
    <StyledDrawer
      open={true}
      anchor="right"
      variant="temporary"
      drawerWidth={500}
      elevation={0}
    >
      <StyledAddCodeSnippetWrapper>
        <Typography variant="h3" color={"primary.main"}>
          Add Code Snippet
        </Typography>
        <Box sx={{ marginBlock: pxToEM(10) }}>  
          <form>
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
              value={value}
              onChange={(value) => setValue(value as AutoCompleteOptionType[])}
              options={[
                { title: "The Shawshank Redemption", value: 1994 },
                { title: "The Godfather", value: 1972 },
                { title: "The Godfather: Part II", value: 1974 },
                { title: "The Dark Knight", value: 2008 },
                { title: "12 Angry Men", value: 1957 },
                { title: "Schindler's List", value: 1993 },
                { title: "Pulp Fiction", value: 1994 },
              ]}
            />
          </form>
        </Box>
      </StyledAddCodeSnippetWrapper>
    </StyledDrawer>
  );
};

export default AddSnippet;
