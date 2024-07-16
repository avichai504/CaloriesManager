// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import express from "express";
import { userModule } from "./modules/User/user.module.js";
import { calorieModule } from "./modules/Calorie/calorie.module.js";
import { reportModule } from "./modules/Report/report.module.js";
import { aboutModule } from "./modules/About/about.module.js";
import db from "./config/db.js";

// Initialize the Express application
const app = express();

// Set the port for the server to listen on, defaulting to 3000 if not specified in the environment
const PORT = process.env.PORT || 3000;

// Apply JSON middleware to parse JSON requests
app.use(express.json());

/**
 * Initialize application modules, attaching various endpoints to our Express app
 */
userModule(app);
calorieModule(app);
reportModule(app);
aboutModule(app);

/**
 * Start the server and handle any potential database connection issues.
 * This function connects to the database and then starts the server, listening on the specified port.
 */
const startServer = async () => {
  try {
    // Attempt to connect to the database before starting the server
    await db.connect();
    // Start listening on the configured port and log the server status
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (error) {
    console.log("DataBase connection failed: ", error);
  }
};

startServer();
