const MODULE_PREFIX = "code-snippet";

import { FetchAPI } from "@/utils/fetch.utils";

import { AddEditCodeSnippet } from "@/types";
import {
  AddSnippetResponseType,
  GetSnippetsResponseType,
  AddEditFavoriteResponseType,
} from "./responseType";

export type SnippetParamsType = {
  title?: string;
  tags?: string;
  search?: string;
};

export type AddEditFavoriteType = {
  isFavorite: boolean;
  snippetId: string;
};

const routes = {
  ADD_SNIPPET: `${MODULE_PREFIX}/add-snippet`,
  GET_SNIPPETS: `${MODULE_PREFIX}/snippets`,
  ADD_REMOVE_FAVORITE: `${MODULE_PREFIX}/favorite`,
};

export const addCodeSnippet = (codeSnippet: AddEditCodeSnippet) => {
  return new FetchAPI(routes.ADD_SNIPPET, "POST")
    .setData(codeSnippet)
    .send<AddSnippetResponseType>();
};

export const getCodeSnippets = async (params: SnippetParamsType) => {
  return new FetchAPI(routes.GET_SNIPPETS, "GET")
    .setQueryParams(params)
    .send<GetSnippetsResponseType>();
};

export const addRemoveFavoriteSnippet = (params: AddEditFavoriteType) => {
  const { snippetId, isFavorite } = params;
  return new FetchAPI(routes.ADD_REMOVE_FAVORITE, "PATCH")
    .setQueryParams({ snippetId: snippetId })
    .setData({ isFavorite: isFavorite })
    .send<AddEditFavoriteResponseType>();
};
