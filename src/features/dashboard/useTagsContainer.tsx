import { useTagSelectStore } from "@/store";

import { useFetchGetAllTagQuery } from "@/queries/tags.queries";

export const useTagsContainer = () => {
  const skeletonItems = Array(6).fill(null);

  const { data: tagsData, isLoading: isTagsLoading } = useFetchGetAllTagQuery(
    {}
  );
  const { tagValue, handleTagSelect, handleClearSelectedTag } =
    useTagSelectStore((state) => state);

  return {
    tagValue,
    tagsData,
    skeletonItems,
    isTagsLoading,
    handleTagSelect,
    handleClearSelectedTag,
  };
};
