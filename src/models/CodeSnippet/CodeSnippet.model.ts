import mongoose from "mongoose";

const codeSnippetSchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  tags: { type: [String], required: true },
  language: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const CodeSnippet =
  mongoose.models.CodeSnippet ||
  mongoose.model("CodeSnippet", codeSnippetSchema);

export default CodeSnippet;
