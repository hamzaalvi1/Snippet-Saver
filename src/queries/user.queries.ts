import { getMe } from "@/helper/api/user";
import { useQuery } from "@tanstack/react-query";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["user/me"],
    queryFn: getMe,
  });
};
