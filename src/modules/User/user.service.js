// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { User } from "./user.model.js";

const getUserById = async (id) => {
  debugger;
  return await User.findOne({
    id,
  });
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export { getUserById, createUser };
