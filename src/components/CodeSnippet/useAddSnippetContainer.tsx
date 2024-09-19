import { useState } from "react";

import { useSnippertEditorStore } from "@/store";

import { AddEditCodeSnippet } from "@/types";
import { AutoCompleteOptionType } from "../AutoComplete/AutoComplete";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEditCodeSnippetSchema } from "@/validations";

export const useAddSnippetContainer = () => {
  const [tags, setTags] = useState<AutoCompleteOptionType[]>([]);

  const { control: snippetControl } = useForm<AddEditCodeSnippet>({
    defaultValues: {
      title: "",
      description: "",
      code: "",
      tags: [],
      langauge: "",
    },
    resolver: zodResolver(addEditCodeSnippetSchema),
  });
  const { open: editorOpen, handleCloseEditor } = useSnippertEditorStore();

  const handleFormatedEditorOptions = (options: string[]) => {
    return options.map((option) => ({ title: option, value: option }));
  };

  const handleAddTags = (tagList: AutoCompleteOptionType[]) => {
    const updatedTagsList = tagList.map((tag) => {
      if (typeof tag === "string") {
        return { title: tag, value: tag } as AutoCompleteOptionType;
      }
      return tag;
    });
    setTags(updatedTagsList);
  };

  return {
    tags,
    editorOpen,
    snippetControl,
    
    handleAddTags,
    handleCloseEditor,
    handleFormatedEditorOptions,
  };
};
