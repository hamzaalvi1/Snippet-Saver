import { type NextRequest, NextResponse } from "next/server";
import { verifyToken, findUser, mongodbConnect } from "@/libs";
export const GET = async (request: NextRequest) => {
  const token = request?.cookies.get("accessToken")?.value!;

  console.log(token, "token");
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
    exclude: "-password",
  });
  return NextResponse.json({ message: "success", data: user }, { status: 200 });
};
