import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
  gender: { type: String, enum: ["male", "female", "other"] },
  
  applications: [{ type: mongoose.Types.ObjectId, ref: "Application" }],
});

export default mongoose.model("User", UserSchema);
