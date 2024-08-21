"use client";
import { pxToEM } from "@/theme";
import {
  FormControl,
  InputAdornment,
  SxProps,
  FormHelperText,
} from "@mui/material";
import { StyledLabel, StyledInputField } from "./InputField.style";

import { Control, Controller } from "react-hook-form";

interface IInputFieldProps {
  id: string;
  name: string;
  type?: string;
  label?: string;
  showIcon?: boolean;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
  control?: Control<any>;
  value?: string | number;
  sxIconProps?: SxProps;
  sxFormControl?: SxProps;
  defaultValue?: string | number;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  isBorderNone?: boolean;
  onIconClick?: (evt: any) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<IInputFieldProps> = (props) => {
  const {
    id,
    name,
    control,
    type = "text",
    label,
    value,
    disabled,
    helperText,
    placeholder,
    defaultValue,
    showIcon,
    leftIcon,
    rightIcon,
    onChange,
    onIconClick,
    sxIconProps,
    isBorderNone = false,
    sxFormControl,
  } = props;

  const renderInputField = (
    fieldProps: any,
    fieldRef: any,
    error: boolean,
    errorText?: any
  ) => (
    <FormControl fullWidth sx={sxFormControl}>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInputField
        id={id}
        type={type}
        inputRef={fieldRef}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        isBorderNone={isBorderNone}
        {...fieldProps}
        InputProps={{
          ...(showIcon &&
            !!leftIcon && {
              startAdornment: (
                <InputAdornment
                  position="start"
                  onClick={onIconClick}
                  sx={{
                    cursor:
                      typeof onIconClick == "function" ? "pointer" : "default",
                  }}
                >
                  {leftIcon}
                </InputAdornment>
              ),
            }),
          ...(showIcon &&
            !!rightIcon && {
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={onIconClick}
                  sx={{
                    cursor:
                      typeof onIconClick == "function" ? "pointer" : "default",
                    ...sxIconProps,
                  }}
                >
                  {rightIcon}
                </InputAdornment>
              ),
            }),
        }}
      />
      {error && (
        <FormHelperText error={error} sx={{ marginLeft: pxToEM(10) }}>
          {errorText}
        </FormHelperText>
      )}

      {helperText && (
        <FormHelperText sx={{ marginLeft: pxToEM(10) }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
  return control ? (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      render={({
        field: { ref: fieldRef, ...fieldProps },
        formState: { errors },
      }) =>
        renderInputField(
          fieldProps,
          fieldRef,
          !!errors[name]?.message,
          errors[name]?.message
        )
      }
    />
  ) : (
    renderInputField({ onChange, name, value }, null, false)
  );
};

export default InputField;
