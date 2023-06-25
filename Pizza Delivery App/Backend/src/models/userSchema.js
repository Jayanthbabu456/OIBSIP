import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles.js";

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Firstname is Required"],
      maxLength: [50, "Firstname must be less than 50 chars"],
    },
    lname: {
      type: String,
      required: [true, "Lastname is Required"],
      maxLength: [50, "Lastname must be less than 50 chars"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must contain 8 chars"],
      //   Denying the access from database to bring the password.
      Select: false,
    },
    role: {
      type: String,
      enum: Object.values(AuthRoles),
      default: AuthRoles.USER,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
