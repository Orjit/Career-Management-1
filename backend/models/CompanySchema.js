import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  logo: { type: String },
  role: {
    type: String,
  },

  specilizations_required: { type: String },
  minimum_qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  what_We_need: { type: String, maxLength: 50 },
  aboutus: { type: String },
  
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },

  isApproved: {
    type: String,
    enum: ["pending", "approved", "rejected"],             
    default: "pending",
  },
  applications: [{ type: mongoose.Types.ObjectId, ref: "Application" }],
});

export default mongoose.model("Company", CompanySchema);
