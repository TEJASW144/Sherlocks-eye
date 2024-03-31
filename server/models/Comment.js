import mongoose from "mongoose";

const schema = new mongoose.Schema({
  author: { type: String, required: false },
  postedAt: { type: Date, required: false },
  title: { type: String },
  body: { type: String, required: true },
  parentId: { type: mongoose.ObjectId, required: false },
  rootId: { type: mongoose.ObjectId, required: false },
});
const Comment = mongoose.model("Comment", schema);

export default Comment;
