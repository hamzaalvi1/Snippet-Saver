import { JwtPayload } from "@/types";

import jwt from "jsonwebtoken";

export const generateToken = async (payload: JwtPayload) => {
  const accessToken = await jwt.sign(payload, process.env.JWT_SECRET_KEY!);
  return accessToken;
};

export const verifyToken = async (token: string) => {
  const data = await jwt.verify(token, process.env.JWT_SECRET_KEY!);
  return data as JwtPayload;
};