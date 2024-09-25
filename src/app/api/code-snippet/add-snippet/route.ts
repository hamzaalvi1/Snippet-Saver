import { type NextRequest, NextResponse } from "next/server";

import { AddEditCodeSnippet } from "@/types";

import { zodError } from "@/utils/error.utils";
import { addEditCodeSnippetSchema } from "@/validations";
import { removeArraysDuplicatesValues } from "@/utils/common.utils";

import {
  findUser,
  verifyToken,
  getTagsByUser,
  mongodbConnect,
  createSnippets,
  createTagsByUser,
} from "@/libs";

export const POST = async (request: NextRequest) => {
  try {
    // check token start
    const token = request.cookies.get("accessToken")?.value!;
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized resource" },
        { status: 401 }
      );
    }
    // check token end

    // verify token start
    await mongodbConnect();
    const tokenData = await verifyToken(token);
    const user = await findUser({
      email: tokenData?.emailAddress,
      select: ["_id"],
    });
    // verify token end

    // check request body data start
    const data: Promise<AddEditCodeSnippet> = await request.json();
    const result = await addEditCodeSnippetSchema.safeParseAsync(data);
    if (!result.success) {
      return NextResponse.json(
        { error: zodError(result.error) },
        { status: 400 }
      );
    }
    const normalizedData = {
      title: result?.data?.title,
      description: result?.data?.description,
      tags: result?.data?.tags.map((tag) => tag.title),
      language: result?.data?.language?.value,
      code: result?.data?.code,
      userId: user?._id,
    };
    const tagData = await getTagsByUser({ _id: normalizedData?.userId });
    const tagList = tagData?.tags?.map((tag) => tag?.name);
    const normalizeTagArray = removeArraysDuplicatesValues(
      normalizedData?.tags,
      tagList as Array<string>
    );
    if (!!normalizeTagArray.length) {
      for (let tag of normalizeTagArray) {
        await createTagsByUser({ tag: tag as string, userId: user?._id });
      }
    }

    await createSnippets(normalizedData);

    return NextResponse.json({ message: "created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
