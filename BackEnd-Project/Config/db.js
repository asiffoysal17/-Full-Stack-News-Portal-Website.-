import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.Mongo_URI);
  console.log("MongoDB Connected Successfully");
};
