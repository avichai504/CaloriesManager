// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import express from "express";
import { setupSwagger } from "./config/swagger.js";
import { userModule } from "./modules/User/user.module.js";
import { calorieModule } from "./modules/Calorie/calorie.module.js";
import { reportModule } from "./modules/Report/report.module.js";
import { aboutModule } from "./modules/About/about.module.js";
import db from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Swagger
setupSwagger(app);

// Middleware
app.use(express.json());

// Initialize modules
userModule(app);
calorieModule(app);
reportModule(app);
aboutModule(app);

const startServer = async () => {
  try {
    await db.connect();
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (error) {
    console.log("DataBase connection failed: ", error);
  }
};

startServer();
