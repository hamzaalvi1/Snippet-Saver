import { Tags } from "@/models";

export const createTags = async (tag: string) => {
  try {
    await Tags.create({ name: tag });
  } catch (error) {
    console.log(error);
  }
};
