import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    inStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models?.product || mongoose.model("product", ProductSchema);
