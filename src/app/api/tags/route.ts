import { mongodbConnect, verifyToken, findUser, getTagsByUser } from "@/libs";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
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
    const tagData = await getTagsByUser({ _id: user?._id });
    const sanitizedTagList = tagData?.tags?.map((tag) => ({
      tag: tag?.name,
      id: tag?._id,
    }));
    return NextResponse.json(
      { message: "Success!", tags: sanitizedTagList, count: tagData?.count },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
