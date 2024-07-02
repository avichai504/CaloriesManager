//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://mongodbuser:T53Tv0zKHaSej6ru@cluster0.r86tsdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
