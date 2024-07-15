// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { router } from "./report.controller.js";

const reportModule = (app) => {
  console.log("\n Report Module Loaded \n");
  app.use("", router);
};

export { reportModule };
