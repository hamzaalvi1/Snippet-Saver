import { SnippetTag } from "@/models";
import mongoose from "mongoose";

type GetTagsByUserType = {
  _id: mongoose.Schema.Types.ObjectId;
};

type CreateTagsByUserType = {
  userId: mongoose.Schema.Types.ObjectId;
  tag: string;
};

export const createTagsByUser = async (params: CreateTagsByUserType) => {
  try {
    await SnippetTag.create({ name: params?.tag, userId: params?.userId });
  } catch (error) {
    console.log(error);
  }
};

export const getTagsByUser = async (params: GetTagsByUserType) => {
  try {
    const query = {
      userId: params._id,
    };
    const tags = await SnippetTag.find(query);
    const count = await SnippetTag.countDocuments(query);

    return { tags, count };
  } catch (error) {
    console.log(error);
  }
};
