import { useFetchCodeSnippetQuery } from "@/queries/code-snippet.queries";

export const useDashboardContainer = () => {
  const { data: snippetsData, isLoading: isSnippetsLoading } =
    useFetchCodeSnippetQuery({});

  return { snippetsData, isSnippetsLoading };
};
