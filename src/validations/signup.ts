import z from "zod";

export const signUpSchema = z.object({
  username: z
    .string({ message: "username is required" })
    .min(3, "minimum character must be 3"),
  email: z
    .string({ message: "username is required" })
    .email("invalid email address"),
  password: z
    .string({ message: "password is required" })
    .min(6, "password must be at least 6")
    .max(20, "password maximum length is 20 characters"),
});
