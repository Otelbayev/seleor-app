import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    image: { type: Stsring },
    imageKey: { type: String },
    stripePriceId: { type: String },
    stripeProductId: { type: String },
  },
  { timestamps: true }
);

export default model("User", productSchema);
