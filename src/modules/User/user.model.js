// Avichai Gal Or 207051848
// Nitzan Azbel 311489470
// src/modules/User/user.model.js

import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the User model using the defined schema
const User = mongoose.model("User", userSchema);

export { User };
