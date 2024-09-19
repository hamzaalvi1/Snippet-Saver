"use client";
import { SignUp } from "@/types";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useSignUpQuery } from "@/queries/auth.queries";

import { signUpSchema } from "@/validations";
import { successLogger } from "@/utils/toast.utils";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignUpContainer = () => {
  const router = useRouter();
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);
  const { mutateAsync: onSignUpMutation, isPending } = useSignUpQuery();
  const { control, handleSubmit } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const handleNavigate = (url: string) => router.push(url);
  const handlePasswordToggle = useCallback(() => {
    setPasswordToggle((prev) => !prev);
  }, []);

  const handleSignUp = async (data: SignUp) => {
    const response = await onSignUpMutation(data);
    if (response) {
      successLogger(response.data.message, { position: "top-center" });
      handleNavigate("/dashboard");
    }
  };

  return {
    control,
    isPending,
    passwordToggle,
    handleSignUp,
    handleSubmit,
    handleNavigate,
    handlePasswordToggle,
  };
};
