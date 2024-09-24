import { getAllTags } from "@/helper/api/tags";

import { useQuery } from "@tanstack/react-query";

type useFetchGetAllTagQueryType = {
  onSuccess?: (data: any) => void | undefined;
};
export const useFetchGetAllTagQuery = (params: useFetchGetAllTagQueryType) => {
  const { onSuccess } = params;
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await getAllTags();
      if (typeof onSuccess === "function" && !!data) {
        onSuccess(data);
      }
      return data;
    },
  });
};
