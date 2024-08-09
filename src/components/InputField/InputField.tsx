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
  control: Control<any>;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
  defaultValue?: string | number;
  showIcon?: boolean;
  sxFormControl?: SxProps;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onIconClick?: (evt: any) => void;
}

const InputField: React.FC<IInputFieldProps> = (props) => {
  const {
    id,
    control,
    name,
    type = "text",
    label,
    disabled,
    helperText,
    placeholder,
    defaultValue,
    showIcon,
    leftIcon,
    rightIcon,
    onIconClick,
    sxFormControl,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      render={({
        field: { ref: fieldRef, ...fieldProps },
        formState: { errors },
      }) => (
        <FormControl fullWidth sx={sxFormControl}>
          {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
          <StyledInputField
            id={id}
            type={type}
            inputRef={fieldRef}
            disabled={disabled}
            placeholder={placeholder}
            error={!!errors[name]}
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
                          typeof onIconClick == "function"
                            ? "pointer"
                            : "default",
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
                          typeof onIconClick == "function"
                            ? "pointer"
                            : "default",
                      }}
                    >
                      {rightIcon}
                    </InputAdornment>
                  ),
                }),
            }}
          />
          {typeof errors[name]?.message === "string" && (
            <FormHelperText
              error={!!errors[name]}
              sx={{ marginLeft: pxToEM(10) }}
            >
              {errors[name]?.message}
            </FormHelperText>
          )}

          {helperText && (
            <FormHelperText sx={{ marginLeft: pxToEM(10) }}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default InputField;
