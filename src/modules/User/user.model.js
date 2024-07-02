//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import mongoose from "mongoose";

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
  { timestamps: true,}
);

const User = mongoose.model("User", userSchema);

export { User };
