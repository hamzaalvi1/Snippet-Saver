import z from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string({ message: "Username is required" })
      .min(3, "minimum character must be 3"),
    email: z
      .string({ message: "Email is required" })
      .email("invalid email address"),
    password: z
      .string({ message: "Password is required" })
      .min(6, "password must be at least 6")
      .max(20, "password maximum length is 20 characters"),
  })
  .strict();
