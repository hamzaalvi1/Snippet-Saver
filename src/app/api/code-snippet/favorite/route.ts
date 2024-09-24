import { type NextRequest, NextResponse } from "next/server";

import { mongodbConnect, isFavoriteSnippet } from "@/libs";

type isFavoriteRequestDataType = {
  isFavorite: boolean;
};
export const PATCH = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("accessToken")?.value!;
    const snippetId = request.nextUrl.searchParams.get("snippetId");
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized resource" },
        { status: 401 }
      );
    }
    mongodbConnect();

    const data: isFavoriteRequestDataType = await request.json();
    const queryData = {
      snippetId: snippetId as string,
      isFavorite: data?.isFavorite,
    };
    const updatedSnippet = await isFavoriteSnippet(queryData);

    return NextResponse.json(
      {
        message: "Success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
