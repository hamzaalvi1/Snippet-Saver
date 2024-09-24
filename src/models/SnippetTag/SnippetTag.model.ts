import mongoose from "mongoose";

const snippetTagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Correct use of Date.now
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Ensure userId is properly referenced
});

const SnippetTag =
  mongoose.models.SnippetTag || mongoose.model("SnippetTag", snippetTagSchema);

export default SnippetTag;
