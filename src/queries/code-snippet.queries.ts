import { getQueryClient } from "./query";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  addCodeSnippet,
  getCodeSnippets,
  SnippetParamsType,
} from "@/helper/api/snippets";

type UseAddCodeSnippetQueryType = {
  onSuccess?: (data: any) => void | undefined;
};

type UseCodeSnippetOptionType = {
  enabled?: boolean;
  queryKeys?: string[];
  onSuccess?: (data: any) => void | undefined;
  queryParams?: SnippetParamsType;
};

export const useAddCodeSnippetQuery = (params: UseAddCodeSnippetQueryType) => {
  const { onSuccess } = params;
  return useMutation({
    mutationFn: addCodeSnippet,
    onSuccess: (data) => {
      if (typeof onSuccess === "function" && !!data) {
        onSuccess(data);
      }
      getQueryClient().invalidateQueries({ queryKey: ["code-snippets"] });
    },
  });
};

export const useFetchCodeSnippetQuery = (params: UseCodeSnippetOptionType) => {
  const {
    enabled = true,
    queryKeys = [],
    queryParams = {},
    onSuccess,
  } = params;

  return useQuery({
    enabled,
    queryKey: ["code-snippets", ...queryKeys],
    queryFn: async () => {
      const { data } = await getCodeSnippets(queryParams);
      if (typeof onSuccess === "function" && !!data) {
        onSuccess(data);
      }
      return data;
    },
  });
};