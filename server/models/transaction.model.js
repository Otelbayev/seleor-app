import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    id: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    state: { type: Number },
    amount: { type: Number },
    create_time: { type: Number, default: Date.now() },
    perform_time: { type: Number, default: 0 },
    cancel_time: { type: Number, default: 0 },
    provider: { type: String },
    prepare_id: { type: String },
  },
  { timestamps: true }
);

export default model("User", transactionSchema);
