import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", require: true },
    price: { type: Number, require: true },
    status: { type: String, default: "Pending confirm" },
  },
  { timestamps: true }
);

export default model("User", orderSchema);
