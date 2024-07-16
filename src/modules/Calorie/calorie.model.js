// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import mongoose from "mongoose";

/**
 * Define the schema for the Calorie model. This schema will be used to create and manage
 * entries in the Calorie collection in the MongoDB database.
 */
const calorieSchema = new mongoose.Schema(
  {
    // User ID associated with the calorie entry
    user_id: {
      type: String,
      required: true,
    },
    // Year of the calorie entry
    year: {
      type: Number,
      required: true,
    },
    // Month of the calorie entry
    month: {
      type: Number,
      required: true,
    },
    // Day of the calorie entry
    day: {
      type: Number,
      required: true,
    },
    // Unique identifier for the calorie entry
    id: {
      type: String,
      required: true,
    },
    // Description of the calorie entry
    description: {
      type: String,
      required: true,
    },
    // Category of the meal or snack
    category: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "dinner", "other"], // Allowed categories
    },
    // Caloric amount of the meal or snack
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Calorie = mongoose.model("calorie", calorieSchema);

export { Calorie };
