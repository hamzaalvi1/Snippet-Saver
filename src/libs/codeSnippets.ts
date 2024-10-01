import mongoose from "mongoose";
import { CodeSnippet } from "@/models";

export type NormalizeCodeSnippetType = {
  code: string;
  title: string;
  tags: string[];
  language: string;
  description: string;
  isFavorite?: boolean;
  userId: mongoose.Schema.Types.ObjectId;
};

export type GetSnippets = {
  userId: mongoose.Schema.Types.ObjectId;
  search?: string;
  isFavorite?: boolean;
  tags?: string;
};

export type IsFavoriteSnippetType = {
  snippetId: string;
  isFavorite: boolean;
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
  const { userId, search, isFavorite, tags } = params;
  console.log(tags, "tag hello world");
  try {
    const query: any = {
      userId,
    };
    if (!!search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } }, // Search in title
        { description: { $regex: search, $options: "i" } }, // Search in description
        { tags: { $regex: search, $options: "i" } }, // Search in tags array
      ];
    }
    if (isFavorite) {
      query.isFavorite = true;
    }

    if (tags) {
      query.tags = tags;
    }
    const snippets = await CodeSnippet.find(query, null, options).sort({
      createdAt: -1,
    });
    const count = await CodeSnippet.countDocuments(query);
    return { snippets: snippets, total: count };
  } catch (error) {
    console.log(error);
  }
};

export const isFavoriteSnippet = async (params: IsFavoriteSnippetType) => {
  try {
    const { snippetId, isFavorite } = params;
    const snippet = await CodeSnippet.findByIdAndUpdate(
      snippetId,
      { isFavorite: isFavorite },
      { new: true }
    );
    return snippet;
  } catch (error) {
    console.log(error);
  }
};
