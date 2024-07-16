// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./report.controller.js";

/**
 * Initializes the report module by attaching its routes to the main application.
 * This function is designed to setup the routing for report-related operations.
 */
const reportModule = (app) => {
  console.log("\n Report Module Loaded \n");
  app.use("", router);
};

export { reportModule };
