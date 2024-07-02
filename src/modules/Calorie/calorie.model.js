//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import mongoose from "mongoose";

const calorieSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "dinner", "other"], 
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Calorie = mongoose.model("calorie", calorieSchema);

export { Calorie };
