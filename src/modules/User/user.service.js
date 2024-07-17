// Avichai Gal Or 207051848
// Nitzan Azbel 311489470
// src/modules/User/user.service.js

import { User } from "./user.model.js";

// Retrieves a user from the database by their ID.
const getUserById = async (id) => {
  // Query MongoDB for a single user by their id
  return await User.findOne({
    id,
  });
};

// Creates a new user in the database.
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export { getUserById, createUser };
