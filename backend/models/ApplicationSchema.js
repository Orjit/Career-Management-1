import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    status: {                          
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
