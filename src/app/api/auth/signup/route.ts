import { type NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { signUpSchema } from "@/validations";
import { zodError } from "@/utils/error.utils";
import {
  isUserAlreadyExist,
  createUser,
  mongodbConnect,
  generateToken,
} from "@/libs";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    // parsing signup user through signup schema
    const result = await signUpSchema.safeParseAsync(data);
    if (!result.success) {
      return NextResponse.json({ error: zodError(result.error), status: 400 });
    }
    const { username, email, password } = result.data;

    // generate hash password
    const salt = await bcrypt.genSalt(10);
    const hashPasword = await bcrypt.hash(password, salt);

    //connect db & check if user is exist throw error otherwise create user
    await mongodbConnect();
    const isUserExist = await isUserAlreadyExist(email);
    if (isUserExist) {
      return NextResponse.json({ error: "user already exists", status: 400 });
    }

    await createUser({ email, password: hashPasword, username });
    const accessToken = await generateToken({ emailAddress: email, username });

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    // // Set the cookie on the response
    cookies().set("accessToken", accessToken, {
      expires: expirationDate,
      httpOnly: true, // Use httpOnly for security
      secure: process.env.NODE_ENV === "production", // Ensure this is correctly set
      sameSite: "strict", // Use sameSite for CSRF protection
    });
    return NextResponse.json(
      {
        message: "user sucessfully created",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
