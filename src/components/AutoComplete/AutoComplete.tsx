"use client";
import { forwardRef } from "react";
import { StyledChip } from "../Chip/Chip.style";
import { StyledAutoComplete } from "./AutoComplete.style";
import { StyledLabel } from "../InputField/InputField.style";
import {
  TextField,
  FormControl,
  InputAdornment,
  SxProps,
  createFilterOptions,
  FormHelperText,
  ListItemText,
} from "@mui/material";
import { pxToEM } from "@/theme";

export type AutoCompleteOptionType = {
  inputValue?: string;
  title: string;
  value: string | number;
};

interface IAutoCompleteProps {
  id?: string;
  error?: string;
  label?: string;
  disabled?: boolean;
  showIcon?: boolean;
  multiple?: boolean;
  placeholder?: string;
  showPopupIcon?: boolean;
  sxIconProps?: SxProps;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  options: AutoCompleteOptionType[];
  value: AutoCompleteOptionType | AutoCompleteOptionType[] | null;
  onChange: (value: AutoCompleteOptionType | AutoCompleteOptionType[]) => void;
}

const filter = createFilterOptions<AutoCompleteOptionType>();
const AutoComplete = forwardRef<HTMLElement, IAutoCompleteProps>(
  (props, ref) => {
    const {
      id,
      error,
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
      showPopupIcon = true,
      onChange,
    } = props;
    return (
      <FormControl fullWidth>
        {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}

        <StyledAutoComplete
          id={id}
          freeSolo
          ref={ref}
          value={value}
          options={options}
          multiple={multiple}
          disabled={disabled}
          forcePopupIcon={showPopupIcon}
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
                  <StyledChip
                    label={option.title}
                    key={`${option.value}-${key}`}
                    {...tagProps}
                  />
                );
              }
            )
          }
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!error}
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
          onChange={(_, newValue) => {
            onChange(
              newValue as AutoCompleteOptionType | AutoCompleteOptionType[]
            );
          }}
        />

        {error && (
          <FormHelperText error={!!error} sx={{ marginLeft: pxToEM(10) }}>
            {error}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);
AutoComplete.displayName = "AutoComplete";
export default AutoComplete;
