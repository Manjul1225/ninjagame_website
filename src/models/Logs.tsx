import mongoose, { Schema } from "mongoose";

const logsSchema = new Schema(
  {
    account: { type: String, required: true },
    cpoint: { type: Number, required: true },
    apoint: { type: Number, required: true },
    bpoint: { type: Number, required: true },
    admin: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

const Logs = mongoose.models.Logs ||mongoose.model("Logs", logsSchema)
export default Logs