import z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "email is required" })
    .email("Invalid email address"),
  password: z.string().min(1, { message: "password is required" }),
}).strict();