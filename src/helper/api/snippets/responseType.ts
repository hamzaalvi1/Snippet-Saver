import { NormalizeCodeSnippetType } from "@/libs/codeSnippets";

export type AddSnippetResponseType = {
  message: string;
};

export type GetSnippetsResponseType = {
  total: number;
  message: string;
  snippets: Array<NormalizeCodeSnippetType & { _id: string }>;
};
