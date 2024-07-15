// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import mongoose from "mongoose";
import dotenv from "dotenv";

// Initialize dotenv
dotenv.config();

const connect = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default { connect };
