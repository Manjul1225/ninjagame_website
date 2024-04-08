import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    point: { type: Number, required: true, default:1000 },
    totalSpent: { type: Number, required: true, default:0 },
  },
);

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);
export default Users