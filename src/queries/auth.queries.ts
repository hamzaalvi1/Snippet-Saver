import { Login, SignUp } from "@/helper/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useLoginQuery = () => {
  return useMutation({
    mutationFn: Login,
  });
};

export const useSignUpQuery = () => {
  return useMutation({
    mutationFn: SignUp,
  });
};
