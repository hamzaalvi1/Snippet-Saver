import { getMe } from "@/helper/api/user";
import { useQuery } from "@tanstack/react-query";

type UsMeQueryType = {
  enabled?: boolean;
  onSuccess?: (data: any) => void | undefined;
  queryKeys?: string[];
};

export const useMeQuery = (params: UsMeQueryType) => {
  const { enabled = true, onSuccess, queryKeys = [] } = params;
  return useQuery({
    enabled: enabled,
    queryKey: ["user/me", ...queryKeys],
    queryFn: async () => {
      const { data } = await getMe();
      if (typeof onSuccess === "function" && !!data) {
        onSuccess(data);
      }
      return data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
