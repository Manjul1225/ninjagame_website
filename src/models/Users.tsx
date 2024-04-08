import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    point: { type: Number, required: true },
    totalspent: { type: Number, required: true },
  },
  {
    timestamps: true
  }
);

const Users = mongoose.model("Users", UsersSchema)
export default Users