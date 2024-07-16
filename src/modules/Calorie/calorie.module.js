// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./calorie.controller.js";

/**
 * Initializes the calorie module by attaching its routes to the main application.
 * This function is called to configure the routing of calorie operations within the app.
 */
const calorieModule = (app) => {
  console.log("\nCalorie Module Loaded \n");
  app.use("", router);
};

export { calorieModule };
