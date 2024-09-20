import mongoose from "mongoose";
import { CodeSnippet } from "@/models";

export type NormalizeCodeSnippetType = {
  code: string;
  title: string;
  tags: string[];
  language: string;
  description: string;
  userId: mongoose.Schema.Types.ObjectId;
};

export type GetSnippets = {
  userId: mongoose.Schema.Types.ObjectId;
  title?: string;
  tag?: string;
};

export const createSnippets = async (codeSnippet: NormalizeCodeSnippetType) => {
  try {
    await CodeSnippet.create({ ...codeSnippet });
  } catch (error) {
    console.log(error);
  }
};

export const getSnippets = async (params: GetSnippets) => {
  const { userId, tag, title } = params;
  try {
    const snippets = await CodeSnippet.find({
      userId: userId,
      ...(title && { title: { $regex: title, $options: "i" } }),
    });
    const count = await CodeSnippet.countDocuments({
      userId: userId,
      ...(title && { title: { $regex: title, $options: "i" } }),
    });
    return { data: snippets, total: count };
  } catch (error) {
    console.log(error);
  }
};
