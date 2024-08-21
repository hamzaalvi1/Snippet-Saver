import { BaseModel } from "@/types";

export type UserResponseType = {
  _id: string;
  email: string;
  username: string;
  imgUrl?: string;
} & BaseModel;
