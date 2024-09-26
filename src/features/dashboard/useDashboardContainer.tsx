import { useSearchQueryStore } from "@/store";
import { useFetchCodeSnippetQuery } from "@/queries/code-snippet.queries";

export const useDashboardContainer = () => {
  const { searchValue } = useSearchQueryStore((state) => state);
  const { data: snippetsData, isLoading: isSnippetsLoading } =
    useFetchCodeSnippetQuery({
      queryKeys: [searchValue],
      queryParams: { search: searchValue },
    });

  return { snippetsData, isSnippetsLoading };
};
