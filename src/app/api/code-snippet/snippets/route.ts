import { type NextRequest, NextResponse } from "next/server";

import { mongodbConnect, verifyToken, getSnippets, findUser } from "@/libs";

export const GET = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("accessToken")?.value!;
    const title = request.nextUrl.searchParams.get("title") as string;
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized resource" },
        { status: 401 }
      );
    }
    mongodbConnect();

    const data = await verifyToken(token);
    const user = await findUser({ email: data?.emailAddress });
    const snippets = await getSnippets({ userId: user._id, title: title });

    return NextResponse.json({ snippets, message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
