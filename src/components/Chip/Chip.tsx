"use client";
import { SxProps } from "@mui/material";
import { StyledChip } from "./Chip.style";
import React from "react";

interface IChipProps {
  label: string;
  color?: string;
  clickable?: boolean;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  onClick?: () => void;
  onDelete?: () => void;
  icon?: React.ReactElement;
  sx?: SxProps;
}
const Chip: React.FC<IChipProps> = (props) => {
  const {
    sx,
    label,
    onClick,
    onDelete,
    icon,
    clickable = false,
    size = "medium",
    variant = "filled",
  } = props;
  return (
    <StyledChip
      sx={sx}
      size={size}
      icon={icon}
      label={label}
      variant={variant}
      onClick={onClick}
      onDelete={onDelete}
      clickable={clickable}
    />
  );
};

export default Chip;
