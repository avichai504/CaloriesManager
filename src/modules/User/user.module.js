// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./user.controller.js";

const userModule = (app) => {
  console.log("\n User Module Loaded \n");
  app.use("", router);
};

export { userModule };
