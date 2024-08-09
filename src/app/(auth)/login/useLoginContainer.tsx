"use client";
import { LoginIn } from "@/types";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { loginSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginContainer = () => {
  const router = useRouter();
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);
  const { control, handleSubmit, reset } = useForm<LoginIn>({
    resolver: zodResolver(loginSchema),
  });

  const handleNavigate = (url: string) => router.push(url);
  const handlePasswordToggle = useCallback(() => {
    setPasswordToggle((prev) => !prev);
  }, []);

  return { control, passwordToggle, handlePasswordToggle, handleNavigate };
};
