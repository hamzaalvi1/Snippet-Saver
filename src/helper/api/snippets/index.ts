const MODULE_PREFIX = "code-snippet";

import { FetchAPI } from "@/utils/fetch.utils";

import { AddEditCodeSnippet } from "@/types";
import { AddSnippetResponseType } from "./responseType";
import { NormalizeCodeSnippetType } from "@/libs/codeSnippets";

export type SnippetParamsType = {
  title?: string;
  tags?: string;
};

const routes = {
  ADD_SNIPPET: `${MODULE_PREFIX}/add-snippet`,
  GET_SNIPPETS: `${MODULE_PREFIX}/snippets`,
};

export const addCodeSnippet = (codeSnippet: AddEditCodeSnippet) => {
  return new FetchAPI(routes.ADD_SNIPPET, "POST")
    .setData(codeSnippet)
    .send<AddSnippetResponseType>();
};

export const getCodeSnippets = (params: SnippetParamsType) => {
  return new FetchAPI(routes.GET_SNIPPETS, "GET")
    .setQueryParams(params)
    .send<NormalizeCodeSnippetType[]>();
};
