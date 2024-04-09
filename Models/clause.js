import mongoose from "mongoose";

const clauseSchema = mongoose.Schema({
  name: { type: String, required: true },
  clauseWording: { type: String, required: true },
  type: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("Clause", clauseSchema);
