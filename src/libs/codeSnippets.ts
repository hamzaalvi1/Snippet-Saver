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
  tags?: string;
};

export const createSnippets = async (codeSnippet: NormalizeCodeSnippetType) => {
  try {
    await CodeSnippet.create({ ...codeSnippet });
  } catch (error) {
    console.log(error);
  }
};

export const getSnippets = async (
  params: GetSnippets,
  options?: Record<string, any>
) => {
  const { userId, tags, title } = params;
  try {
    const query = {
      userId,
      ...(title && { title: { $regex: title, $options: "i" } }),
      ...(tags && { tags: { $regex: tags, $options: "i" } }), // Assuming tags are an array or string
    };
    const snippets = await CodeSnippet.find(query, null, options);
    const count = await CodeSnippet.countDocuments(query);
    return { snippets: snippets, total: count };
  } catch (error) {
    console.log(error);
  }
};
