"use server";
import { cookies } from "next/headers";

export const handleDeleteCookie = async () => {
  "use server";
  await cookies().delete("accessToken");
};

export const handleGetCookie = async () => {
  "use server";
  const accessToken = await cookies().get("accessToken");
  return accessToken?.value;
};
