// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import mongoose from "mongoose";
import dotenv from "dotenv";

//Initialize dotenv to load environment variables from a .env file.
dotenv.config();

/**
 * Connects to MongoDB using the connection string from environment variables.
 * This function handles the connection logic including error handling.
 */
const connect = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    await mongoose.connect(dbUri, {
      useNewUrlParser: true, // Use the new URL parser for MongoDB connection strings
      useUnifiedTopology: true, // Use the unified topology layer
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    // Log and rethrow the error if the connection fails
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

// Export the connect function as part of a default object
export default { connect };
