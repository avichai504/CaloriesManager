//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import express from "express";
import dotenv from "dotenv";
import { userModule } from "./modules/User/user.module.js";
import { calorieModule } from "./modules/Calorie/calorie.module.js";
import { reportModule } from "./modules/Report/report.module.js";
import db from "./config/db.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API",
      description: "Express API Information",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000"],
    },
  },
  // ['.routes/*.js']
  apis: ["./src/modules/**/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Initialize modules
userModule(app);
calorieModule(app);
reportModule(app);

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
