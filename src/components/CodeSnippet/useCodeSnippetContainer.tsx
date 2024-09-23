import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

import { pxToEM, theme } from "@/theme";

import { FaTrash } from "react-icons/fa6";
import { FaClipboard, FaEdit } from "react-icons/fa";

import { errorLogger, successLogger } from "@/utils/toast.utils";

export const useCodeSnippetContainer = () => {
  const [_, copyFn] = useCopyToClipboard();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const dummyCode = `export const StyledChip = styled(Chip)
  &.MuiChip-root {
    border-radius: ${pxToEM(5)};
    background-color: ${theme.palette.whiteVariants.light};
    font-size: ${pxToEM(14)};
  }`;

  const handleCopyCodeSnippet = () => {
    copyFn(dummyCode)
      .then(() => {
        successLogger("Code copied");
      })
      .catch((err) => {
        errorLogger("error");
      });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const menuList = [
    { title: "Copy", icon: <FaClipboard />, onClick: handleCopyCodeSnippet },
    { title: "Edit", icon: <FaEdit />, onClick: () => {} },
    { title: "Delete", icon: <FaTrash />, onClick: () => {} },
  ];

  return {
    menuList,
    anchorEl,
    handleMenuOpen,
    handleMenuClose,
  };
};
