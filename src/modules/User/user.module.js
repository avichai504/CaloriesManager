import { router } from "./user.controller.js";

const userModule = (app) => {
  app.use("/api/users", router);
};

export { userModule };
