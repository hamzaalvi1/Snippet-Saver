import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

import { FaTrash } from "react-icons/fa6";
import { FaClipboard, FaEdit } from "react-icons/fa";

import { errorLogger, successLogger } from "@/utils/toast.utils";
import { NormalizeCodeSnippetType } from "@/libs/codeSnippets";
import { useChangeSnippetFavoriteStatus } from "@/queries/code-snippet.queries";
export const useCodeSnippetContainer = ({
  snippetData,
}: {
  snippetData: NormalizeCodeSnippetType & { _id: string; createdAt: string };
}) => {
  const [_, copyFn] = useCopyToClipboard();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleCopyCodeSnippet = () => {
    copyFn(snippetData?.code)
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

  const handleSuccess = () => {
    successLogger("success", {
      position: "top-center",
    });
  };
  const { mutateAsync: changeSnippetFavorites } =
    useChangeSnippetFavoriteStatus({ onSuccess: handleSuccess });

  const handleAddRemoveFavoriteSnippet = async (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    await changeSnippetFavorites({
      snippetId: snippetData?._id,
      isFavorite: !snippetData?.isFavorite,
    });
  };
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
    handleAddRemoveFavoriteSnippet,
  };
};
