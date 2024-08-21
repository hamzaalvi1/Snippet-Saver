"use client";
import { pxToEM, theme } from "@/theme";

import { FiSearch } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";
import { Button, InputField } from "@/components";
import { StyledSearchBoxWrapper } from "./Searchbox.style";

interface ISearchboxProps {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Searchbox: React.FC<ISearchboxProps> = (props) => {
  const { handleChange, value } = props;
  return (  
    <StyledSearchBoxWrapper>
      <InputField
        value={value}
        id="searchbox"
        name="searchbox"
        showIcon={true}
        isBorderNone={true}
        onChange={handleChange}
        placeholder="Search a snippet..."
        leftIcon={
          <FiSearch fontSize={pxToEM(20)} color={theme.palette.primary.main} />
        }
      />
      <Button
        fontSize={14}
        title="Snippet"
        paddingInline={30}
        startIcon={<MdOutlineAdd />}
        disableElevation={true}
        sx={{ borderRadius: "40px !important" }}
      />
    </StyledSearchBoxWrapper>
  );
};

export default Searchbox;
