import { type NextRequest, NextResponse } from "next/server";

import { mongodbConnect, verifyToken, getSnippets, findUser } from "@/libs";

export const GET = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("accessToken")?.value!;
    const search = request.nextUrl.searchParams.get("search") as string;
    const isFavoriteQueryParams = request.nextUrl.searchParams.get(
      "isFavorite"
    ) as string;
    const tags = request?.nextUrl?.searchParams.get("tags") as string;
    const isFavorite = isFavoriteQueryParams === "true" && true;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized resource" },
        { status: 401 }
      );
    }
    mongodbConnect();

    const data = await verifyToken(token);
    const user = await findUser({ email: data?.emailAddress });

    const snippets = await getSnippets({
      tags: tags,
      userId: user._id,
      search: search,
      isFavorite: isFavorite,
    });

    return NextResponse.json(
      { ...snippets, message: "Success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
