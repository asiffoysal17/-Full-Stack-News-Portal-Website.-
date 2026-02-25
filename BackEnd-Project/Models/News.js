import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    category: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("News", newsSchema);
