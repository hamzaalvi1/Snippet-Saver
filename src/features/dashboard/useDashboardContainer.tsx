import { usePathname } from "next/navigation";
import { useSearchQueryStore } from "@/store";
import { useFetchCodeSnippetQuery } from "@/queries/code-snippet.queries";

export const useDashboardContainer = () => {
  const pathname = usePathname();
  const isFavoriteChecked = pathname == "/dashboard/favorites";

  const { searchValue } = useSearchQueryStore((state) => state);
  const { data: snippetsData, isLoading: isSnippetsLoading } =
    useFetchCodeSnippetQuery({
      queryKeys: [searchValue, isFavoriteChecked.toString()],
      queryParams: {
        ...(searchValue && { search: searchValue }),
        ...(isFavoriteChecked && { isFavorite: true }),
      },
    });

  return { snippetsData, isSnippetsLoading };
};
