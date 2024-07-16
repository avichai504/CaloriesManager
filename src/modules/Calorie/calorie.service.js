// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { Calorie } from "./calorie.model.js";


/** 
 * Creates a new calorie entry in the database.
 * This function takes a calorie data object, creates a new instance of the Calorie model,
 * and saves it to the database.
 */
const createCalorie = async (calorieData) => {
  const newCalorie = new Calorie(calorieData);
  return await newCalorie.save();
};

export { createCalorie };
