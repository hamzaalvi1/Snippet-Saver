"use client";
import { CircularProgress, SxProps } from "@mui/material";
import { IStyledButtonProps, StyledButton } from "./Button.style";

interface IButtonProps extends IStyledButtonProps {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "contained" | "outlined";
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  block?: boolean;
  handleClick?: () => void;
  type?: "button" | "submit";
  sx?: SxProps;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    type,
    title,
    block,
    disabled,
    isLoading,
    disableElevation,
    disableFocusRipple,
    color = "primary",
    variant = "contained",
    handleClick,
    ...rest
  } = props;
  return (
    <StyledButton

      type={type}
      color={color}
      variant={variant}
      disabled={isLoading || disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      fullWidth={block}
      onClick={handleClick}
      {...rest}
    >
      {isLoading ? (
        <CircularProgress size={20} sx={{ color: "#fff" }} />
      ) : (
        title
      )}
    </StyledButton>
  );
};

export default Button;
