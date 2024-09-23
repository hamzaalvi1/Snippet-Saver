const MODULE_PREFIX = "code-snippet";

import { FetchAPI } from "@/utils/fetch.utils";
import { handleGetCookie } from "@/utils/cookies.utils";

import { AddEditCodeSnippet } from "@/types";
import {
  AddSnippetResponseType,
  GetSnippetsResponseType,
} from "./responseType";

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

export const getCodeSnippets = async (params: SnippetParamsType) => {
  const token = await handleGetCookie();
  return new FetchAPI(routes.GET_SNIPPETS, "GET")
    .setQueryParams(params)
    .attachToken(token)
    .send<GetSnippetsResponseType>();
};
