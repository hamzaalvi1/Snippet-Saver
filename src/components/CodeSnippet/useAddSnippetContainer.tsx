import { useState } from "react";

import { useSnippertEditorStore } from "@/store";

// import { useFetchGetAllTagQuery } from "@/queries/tags.queries";
import { getQueryClient } from "@/queries";
import { useAddCodeSnippetQuery } from "@/queries/code-snippet.queries";

import { AddEditCodeSnippet } from "@/types";
import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";

import { useForm } from "react-hook-form";
import { successLogger } from "@/utils/toast.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEditCodeSnippetSchema } from "@/validations";
import { GetTagResponseType } from "@/helper/api/tags/responseType";

export const useAddSnippetContainer = () => {
  const [theme, setTheme] = useState<AutoCompleteOptionType | null>({
    title: "tomorrow",
    value: "tomorrow",
  });

  const {
    control: snippetControl,
    reset,
    getValues,
    handleSubmit,
  } = useForm<AddEditCodeSnippet>({
    defaultValues: {
      title: "",
      description: "",
      code: "",
      tags: [],
      language: { title: "javascript", value: "javascript" },
    },

    resolver: zodResolver(addEditCodeSnippetSchema),
  });
  const { open: editorOpen, handleCloseEditor } = useSnippertEditorStore();

  const handleCloseSnippetEditor = () => {
    handleCloseEditor();
    reset();
  };

  const handleOnSnippetSuccess = () => {
    handleCloseSnippetEditor();
    successLogger("Added Successfully");
  };

  const { mutateAsync: addCodeSnippet, isPending: isSnippetLoading } =
    useAddCodeSnippetQuery({ onSuccess: handleOnSnippetSuccess });

  const tagsData = getQueryClient().getQueryData([
    "tags",
  ]) as GetTagResponseType;

  const sanitizedTagList = tagsData?.tags?.map((tag) => ({
    title: tag?.tag,
    value: tag?.id,
  }));

  const handleFormatedEditorOptions = (options: string[]) => {
    return options.map((option) => ({ title: option, value: option }));
  };

  const handleAddTags = (
    tagList: AutoCompleteOptionType[],
    callback: (value: AutoCompleteOptionType[]) => void
  ) => {
    const updatedTagsList = tagList.map((tag) => {
      if (typeof tag === "string") {
        return { title: tag, value: tag } as AutoCompleteOptionType;
      }
      return tag;
    });
    callback(updatedTagsList);
  };

  const handleSelectTheme = (selectedTheme: AutoCompleteOptionType) => {
    setTheme(selectedTheme);
  };
  const { language } = getValues();
  const handleSubmitSnippet = async (data: AddEditCodeSnippet) => {
    addCodeSnippet(data);
  };

  return {
    theme,
    language,
    editorOpen,
    snippetControl,
    sanitizedTagList,
    isSnippetLoading,
    getValues,
    handleSubmit,
    handleAddTags,
    handleSelectTheme,
    handleSubmitSnippet,
    handleCloseSnippetEditor,
    handleFormatedEditorOptions,
  };
};
