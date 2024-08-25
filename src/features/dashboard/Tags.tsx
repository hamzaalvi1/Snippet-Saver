"use client";
import { Button } from "@/components";
import { MdOutlineAdd } from "react-icons/md";
import { StyledTagWrapper, StyledTabs, StyledTab } from "./tag.style";

const Tags = () => {
  return (
    <StyledTagWrapper>
      {" "}
      <StyledTabs
        value={1}
        onChange={() => {}}
        variant="scrollable"
        scrollButtons="auto"
      >
        <StyledTab label="Item One" />
        <StyledTab label="Item Two" />
      </StyledTabs>
      <Button title="Tag" height={40} startIcon={<MdOutlineAdd />} width={75} />
    </StyledTagWrapper>
  );
};

export default Tags;
