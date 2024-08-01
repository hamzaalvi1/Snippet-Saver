import z from "zod";
import { loginSchema, signUpSchema } from "@/validations";

export type User = {
  email: string;
  username: string;
  password: string;
  imgUrl?: string;
};

export type JwtPayload = {
  emailAddress: string;
  id: string;
};

export type SignUp = z.infer<typeof signUpSchema>;

export type LoginIn = z.infer<typeof loginSchema>;
