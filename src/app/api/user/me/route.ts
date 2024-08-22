import { type NextRequest, NextResponse } from "next/server";
import { verifyToken, findUser, mongodbConnect } from "@/libs";
export const GET = async (request: NextRequest) => {
  const token = request?.cookies.get("accessToken")?.value!;
  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized resource" },
      { status: 401 }
    );
  }
  mongodbConnect();
  const data = await verifyToken(token);
  const user = await findUser({
    email: data?.emailAddress,
    exclude: "-password -__v",
  });
  return NextResponse.json({ ...user._doc }, { status: 200 });
};
