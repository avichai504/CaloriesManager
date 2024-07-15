// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./calorie.controller.js";

const calorieModule = (app) => {
  console.log("\nCalorie Module Loaded \n");
  app.use("", router);
};

export { calorieModule };
