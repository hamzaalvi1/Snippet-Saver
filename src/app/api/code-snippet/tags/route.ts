import { findUser, mongodbConnect, verifyToken } from "@/libs";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const token =  request.cookies.get("accessToken")?.value!;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized resource" },
        { status: 401 }
      );
    }
    mongodbConnect();

    const data = await verifyToken(token);
    const user = await findUser({ email: data?.emailAddress });
    return NextResponse.json(
      {
        message: "Success",
        user,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
