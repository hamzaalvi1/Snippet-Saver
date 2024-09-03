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
  label?: string;
  disabled?: boolean;
  showIcon?: boolean;
  multiple?: boolean;
  placeholder?: string;
  sxIconProps?: SxProps;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  options: AutoCompleteOptionType[];
  value: AutoCompleteOptionType | AutoCompleteOptionType[] | null;
  onChange: (value: AutoCompleteOptionType | AutoCompleteOptionType[]) => void;
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const {
    id,
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
        options={options}
        multiple={multiple}
        disabled={disabled}
        className="ss-autocomplete"
        getOptionLabel={(option: any) => option.title}
        isOptionEqualToValue={(option: any, value: any) =>
          option.value === value.value
        }
        renderTags={(value: unknown[], getTagProps) =>
          (value as AutoCompleteOptionType[]).map(
            (option: AutoCompleteOptionType, index: number) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <StyledChip label={option.title} key={key} {...tagProps} />
              );
            }
          )
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  {showIcon && (
                    <InputAdornment position="start" sx={sxIconProps}>
                      {leftIcon}
                    </InputAdornment>
                  )}
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  {showIcon && (
                    <InputAdornment position="start" sx={sxIconProps}>
                      {rightIcon}
                    </InputAdornment>
                  )}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        onChange={(_, newValue) =>
          onChange(
            newValue as AutoCompleteOptionType | AutoCompleteOptionType[]
          )
        }
      />
    </FormControl>
  );
};

export default AutoComplete;
