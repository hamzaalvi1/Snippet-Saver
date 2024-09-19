import z from "zod";

export const addEditCodeSnippetSchema = z
  .object({
    title: z
      .string({ message: "code title is required" })
      .min(3, "minimum character must be 3"),
    tags: z
      .string({ message: "atleast one code tag needed" })
      .array()
      .nonempty(),
    description: z.string({ message: "code description is required" }).min(3),
    langauge: z.string({ message: "programming language is required" }),
    code: z.string({ message: "code snippet is required" }),
  })
  .strict();
