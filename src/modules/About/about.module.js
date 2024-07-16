// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./about.controller.js";

//Initializes the about module by attaching its routes to the main application.
const aboutModule = (app) => {
  console.log("\n About Module Loaded \n");
  app.use("", router);
};

export { aboutModule };
