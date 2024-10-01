import { usePathname } from "next/navigation";
import { useSearchQueryStore, useTagSelectStore } from "@/store";
import { useFetchCodeSnippetQuery } from "@/queries/code-snippet.queries";

export const useDashboardContainer = () => {
  const pathname = usePathname();
  const isFavoriteChecked = pathname == "/dashboard/favorites";

  const { tagValue } = useTagSelectStore((state) => state);
  const { searchValue } = useSearchQueryStore((state) => state);
  const { data: snippetsData, isLoading: isSnippetsLoading } =
    useFetchCodeSnippetQuery({
      queryKeys: [
        searchValue && searchValue,
        isFavoriteChecked.toString(),
        tagValue ? tagValue.toString() : "",
      ],
      queryParams: {
        ...(searchValue && { search: searchValue }),
        ...(isFavoriteChecked && { isFavorite: true }),
        ...(tagValue && { tags: tagValue.toString() }),
      },
    });

  return { snippetsData, isSnippetsLoading };
};
