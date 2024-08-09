import z from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({ message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string({ message: "Password is required" })
      .min(6, { message: "minimum characters of password should be 6 digits" }),
  })
  .strict();
