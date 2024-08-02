import { type NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";

import { LoginIn } from "@/types";
import { loginSchema } from "@/validations";
import { zodError } from "@/utils/error.utils";
import { mongodbConnect, findUser, generateToken } from "@/libs";

export const POST = async (request: NextRequest) => {
  const data: Promise<LoginIn> = await request.json();

  const result = await loginSchema.safeParseAsync(data);
  if (!result.success) {
    return NextResponse.json(
      { error: zodError(result.error) },
      { status: 400 }
    );
  }
  await mongodbConnect();
  const user = await findUser(result.data.email, [
    "email",
    "password",
    "username",
  ]);
  if (!user?.email) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }
  const isPasswordCorrect = await bcrypt.compare(
    result.data.password,
    user?.password
  );
  if (!isPasswordCorrect) {
    return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
  }
  const token = await generateToken({
    emailAddress: user?.email,
    username: user?.username,
  });

  return NextResponse.json(
    { message: "Success", accessToken: token },
    { status: 200 }
  );
};