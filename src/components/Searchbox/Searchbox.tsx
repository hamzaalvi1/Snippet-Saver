"use client";
import { pxToEM, theme } from "@/theme";

import { FiSearch } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";
import { Button, InputField } from "@/components";
import { StyledSearchBoxWrapper } from "./Searchbox.style";

import { useDebounceCallback } from "usehooks-ts";
import { useSearchQueryStore, useSnippertEditorStore } from "@/store";
interface ISearchboxProps {}

const Searchbox: React.FC<ISearchboxProps> = (props) => {
  const { handleOpenEditor } = useSnippertEditorStore();
  const { handleSearch } = useSearchQueryStore((state) => state);
  const debouncedSearch = useDebounceCallback(handleSearch, 300);
  return (
    <StyledSearchBoxWrapper>
      <InputField
        id="searchbox"
        name="searchbox"
        showIcon={true}
        isBorderNone={true}
        onChange={(evt) => debouncedSearch(evt.target.value)}
        placeholder="Search a snippet..."
        leftIcon={
          <FiSearch fontSize={pxToEM(20)} color={theme.palette.primary.main} />
        }
      />
      <Button
        fontSize={14}
        title="Snippet"
        paddingInline={30}
        disableElevation={true}
        startIcon={<MdOutlineAdd />}
        handleClick={handleOpenEditor}
        sx={{ borderRadius: "40px !important" }}
      />
    </StyledSearchBoxWrapper>
  );
};

export default Searchbox;
