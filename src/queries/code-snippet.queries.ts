import {
  useMutation,
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { getQueryClient } from "./query";
import {
  addCodeSnippet,
  getCodeSnippets,
  SnippetParamsType,
} from "@/helper/api/snippets";
import { FetchAPI } from "@/utils/fetch.utils";
import { handleGetCookie } from "@/utils/cookies.utils";

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

export const codeSnippetOption = () => {
  // const {
  //   enabled = true,
  //   queryKeys = [],
  //   queryParams = {},
  //   onSuccess,
  // } = params;

  return queryOptions({
    // enabled,
    queryKey: ["code-snippets"],
    queryFn: async () => {
      const token = await handleGetCookie();
      const response = new FetchAPI(
        "http://localhost:8000/api/code-snippet/snippets",
        "GET"
      )
        .attachToken(token)
        .send();
      // const { data } = await getCodeSnippets()();
      // if (typeof onSuccess === "function" && !!data) {
      //   onSuccess(data);
      // }
      return (await response).data;
    },
  });
};
export const pokemonOptions = queryOptions({
  queryKey: ["code-snippets"],
  queryFn: async () => {
    const token = await handleGetCookie();
    const response = await fetch(
      "http://localhost:8000/api/code-snippet/snippets",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  },
});
export const useCodeSnippetQuery = () => {
  return useSuspenseQuery(pokemonOptions);
};
