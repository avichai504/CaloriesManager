//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import { router } from "./calorie.controller.js";

const calorieModule = (app) => {
  app.use("", router);
};

export { calorieModule };
