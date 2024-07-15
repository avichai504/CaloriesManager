// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { Calorie } from "./calorie.model.js";

const createCalorie = async (calorieData) => {
  const newCalorie = new Calorie(calorieData);
  return await newCalorie.save();
};

export { createCalorie };
