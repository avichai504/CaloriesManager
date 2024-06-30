//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import { router } from "./report.controller.js";

const reportModule = (app) => {
  app.use("", router);
};

export { reportModule };
