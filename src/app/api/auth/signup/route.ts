import { type NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";

import { signUpSchema } from "@/validations";
import { zodError } from "@/utils/error.utils";
import { isUserAlreadyExist, createUser, mongodbConnect } from "@/libs";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const result = await signUpSchema.safeParseAsync(data);
  if (!result.success) {
    return NextResponse.json({ error: zodError(result.error), status: 400 });
  }
  const { username, email, password } = result.data;
  const salt = await bcrypt.genSalt(10);
  const hashPasword = await bcrypt.hash(password, salt);
  await mongodbConnect();
  const isUserExist = await isUserAlreadyExist(email);
  if (isUserExist) {
    return NextResponse.json({ error: "user already exists", status: 400 });
  }

  await createUser({ email, password: hashPasword, username });
  return NextResponse.json({
    message: "user sucessfully created",
    status: 200,
  });
};
