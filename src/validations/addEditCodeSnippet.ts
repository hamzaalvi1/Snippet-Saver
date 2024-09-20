import z from "zod";

const autoCompleteSchema = z.object({
  title: z.string(),
  value: z.string(),
});

export const addEditCodeSnippetSchema = z
  .object({
    title: z
      .string({ message: "code title is required" })
      .min(3, "Minimum character must be 3"),
    tags: z.array(autoCompleteSchema).nonempty(),
    description: z.string({ message: "code description is required" }).min(3),
    language: z.object({ title: z.string(), value: z.string() }).nullable(),
    code: z.string().nonempty({message: "Must add code snippet"}),
  })
  .strict();
