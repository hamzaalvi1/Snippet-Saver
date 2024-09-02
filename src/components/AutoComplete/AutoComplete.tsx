"use client";
import { StyledChip } from "../Chip/Chip.style";
import { StyledAutoComplete } from "./AutoComplete.style";
import { StyledLabel } from "../InputField/InputField.style";
import { TextField, FormControl, InputAdornment, SxProps } from "@mui/material";

export type AutoCompleteOptionType = {
  title: string;
  value: string | number;
};

interface IAutoCompleteProps {
  id?: string;
  name: string;
  label?: string;
  disabled?: boolean;
  showIcon?: boolean;
  multiple?: boolean;
  placeholder?: string;
  sxIconProps?: SxProps;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  options: AutoCompleteOptionType[];
  value: AutoCompleteOptionType | null | [] | AutoCompleteOptionType[];
  onChange: (value: AutoCompleteOptionType | null) => void;
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const {
    id,
    name,
    label,
    value,
    options,
    disabled,
    multiple,
    showIcon,
    leftIcon,
    rightIcon,
    placeholder,
    sxIconProps,
    onChange,
  } = props;

  return (
    <FormControl fullWidth>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledAutoComplete
        id={id}
        value={value}
        multiple={multiple}
        disabled={disabled}
        options={options || []}
        className="ss-autocomplete"
        getOptionLabel={(option) => (option as AutoCompleteOptionType).title}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            name={name}
            InputProps={{
              ...params.InputProps,
              ...(showIcon &&
                !!leftIcon && {
                  startAdornment: (
                    <InputAdornment position="start" sx={sxIconProps}>
                      {leftIcon}
                    </InputAdornment>
                  ),
                }),
              ...(showIcon &&
                !!rightIcon && {
                  endAdornment: (
                    <InputAdornment position="end" sx={sxIconProps}>
                      {rightIcon}
                    </InputAdornment>
                  ),
                }),
            }}
          />
        )}
        onChange={(_, value) =>
          onChange(value as AutoCompleteOptionType | null)
        }
        renderTags={(value: unknown[], getTagProps) => {
          // Assert the value type here
          const optionsValue = value as AutoCompleteOptionType[];
          return optionsValue.map((option, index) => {
            const tagProps = getTagProps({ index });
            return <StyledChip label={option.title} {...tagProps} />;
          });
        }}
      />
    </FormControl>
  );
};

export default AutoComplete;
