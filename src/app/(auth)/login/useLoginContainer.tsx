"use client";
import { LoginIn } from "@/types";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useLoginQuery } from "@/queries/auth.queries";

import { loginSchema } from "@/validations";
import { successLogger } from "@/utils/toast.utils";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginContainer = () => {
  const router = useRouter();
  const { mutateAsync: onLoginMutation, isPending } = useLoginQuery();
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);
  const { control, handleSubmit, reset } = useForm<LoginIn>({
    resolver: zodResolver(loginSchema),
  });

  const handleNavigate = (url: string) => router.push(url);
  const handlePasswordToggle = useCallback(() => {
    setPasswordToggle((prev) => !prev);
  }, []);

  const handleLogin = async (data: LoginIn) => {
    const response = await onLoginMutation(data);
    if (response?.data.message) {
      successLogger(response?.data.message, { position: "top-center" });
      handleNavigate("/dashboard");
    }
  };

  return {
    control,
    isPending,
    passwordToggle,
    handleLogin,
    handleSubmit,
    handleNavigate,
    handlePasswordToggle,
  };
};
