import z from "zod";
import { signUpSchema } from "@/validations";

export type User = {
  email: string;
  username: string;
  password: string;
  imgUrl?: string;
};

export type JwtPayload = {
  emailAddress: string;
  username: string;
  id: string;
};

export type SignUp = z.infer<typeof signUpSchema>;
