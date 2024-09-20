import { useState } from "react";

import { useSnippertEditorStore } from "@/store";

import { AddEditCodeSnippet } from "@/types";
import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEditCodeSnippetSchema } from "@/validations";

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
  const handleSubmitSnippet = (data: AddEditCodeSnippet) => {
    console.log(data);
  };

  return {
    theme,
    language,
    editorOpen,
    snippetControl,
    getValues,
    handleSubmit,
    handleAddTags,
    handleSelectTheme,
    handleSubmitSnippet,
    handleCloseSnippetEditor,
    handleFormatedEditorOptions,
  };
};
