// Avichai Gal Or 207051848
// Nitzan Azbel 311489470
// src/modules/User/user.module.js

import { router } from "./user.controller.js";

/**
 * Initializes the user module by attaching its routes to
 * the main application.
 * This function sets up the routing for user-related operations
 * within the Express app.
 */
const userModule = (app) => {
  console.log("\n User Module Loaded \n");
  app.use("", router);
};

export { userModule };
