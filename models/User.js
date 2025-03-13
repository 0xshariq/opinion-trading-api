import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true,trim : true },
  password: { type: String, required: true },
  apiKey: { type: String, unique: true },
},{ timestamps : true});

export default mongoose.model("User", userSchema);
