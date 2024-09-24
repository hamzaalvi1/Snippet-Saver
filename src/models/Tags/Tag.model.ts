import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Tags = mongoose.models.tagSchema || mongoose.model("Tags", tagSchema);

export default Tags;
