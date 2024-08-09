import { type NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";

import { LoginIn } from "@/types";
import { loginSchema } from "@/validations";
import { zodError } from "@/utils/error.utils";
import { mongodbConnect, findUser, generateToken } from "@/libs";

export const POST = async (request: NextRequest) => {
  try {
    const data: Promise<LoginIn> = await request.json();

    const result = await loginSchema.safeParseAsync(data);
    if (!result.success) {
      return NextResponse.json(
        { error: zodError(result.error) },
        { status: 400 }
      );
    }
    await mongodbConnect();
    const user = await findUser({
      email: result.data.email,
      select: ["email", "password", "username"],
    });
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
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }
    const token = await generateToken({
      emailAddress: user?.email,
      username: user?.username,
    });
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    // // Set the cookie on the response
    cookies().set("accessToken", token, {
      expires: expirationDate,
      httpOnly: true, // Use httpOnly for security
      secure: process.env.NODE_ENV === "production", // Ensure this is correctly set
      sameSite: "strict", // Use sameSite for CSRF protection
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something Went Wrong" },
      { status: 500 }
    );
  }
};
